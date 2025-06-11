import { dirname, join } from "node:path";

import type { Parent } from "unist";
import fs from "node:fs/promises";
// import { toText } from "mdast-util-to-text";
import { is } from "unist-util-is";
import { remove } from "unist-util-remove";
import { select } from "unist-util-select";
import { visit } from "unist-util-visit";

import type { Parents, Root } from "hast";
import { isElement } from "hast-util-is-element";
import { h } from "hastscript";
import type { Plugin } from "unified";
import { findAndReplace } from "hast-util-find-and-replace";
import { visitParents, SKIP } from "unist-util-visit-parents";

export const remarkExtractTitle = () => {
  return (tree: Parameters<typeof select>[1]) => {
    // console.log(inspect(tree));
    const heading = select("heading[depth=1]", tree);
    if (!heading || is("parent", heading)) {
      return null;
    }

    return {
      type: "root",
      children: (heading as Parent).children,
    };
  };
};

export const rehypeRemoveTitle = () => {
  return (tree: Parameters<typeof remove>[0]) => {
    remove(tree, { type: "element", tagName: "h1" });
  };
};

export type RehypeEmojiOptions = {
  emojis: Record<string, string>;
  className?: string;
  ignore?: string | string[];
  alt?: boolean;
};

const defaultOptions: RehypeEmojiOptions = {
  emojis: {},
  className: "emoji",
  ignore: "code",
  alt: true,
};

// I took this from https://github.com/monodyle/rehype-custom-emoji but
// allowed it to visit all nodes or for some reason it wouldn't swap the
// emojis in list items.
export const rehypeCustomEmoji: Plugin<[RehypeEmojiOptions], Root> = (
  options: RehypeEmojiOptions
) => {
  const opts = { ...defaultOptions, ...options };
  const replace_maps: Record<string, any> = {};
  Object.entries(opts.emojis).forEach(([emoji_code, path]) => {
    const emoji = `:${emoji_code}:`;
    const properties = {
      src: path,
      className: opts.className,
      alt: opts.alt ? emoji : undefined,
    };
    replace_maps[emoji] = h("img", properties);
  });

  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type == "element" &&
        node.properties?.dataEmoji === undefined &&
        node.tagName !== "p"
      ) {
        return;
      }
      if (node.type === "text") {
        return;
      }
      // @ts-expect-error
      findAndReplace(node, replace_maps, { ignore: opts.ignore });
    });
  };
};

// Allows to put a footnote on its own line to have it merged with the previous element
// Workaround for "wrap" behavior of heading links fucking up inner footnotes
export const ownLineFootnote = () => {
  return (tree: Root) => {
    visitParents(tree, "element", (node, ancestors) => {
      const directParent = ancestors[ancestors.length - 1];
      if (!isElement(directParent)) {
        return;
      }
      if (
        node.tagName == "sup" &&
        // The parent is a paragraph and there is only one node in itdirectParent
        directParent.tagName == "p" &&
        directParent.children.length == 1
      ) {
        const grandpa = ancestors[ancestors.length - 2];
        // Find the p in grandpa
        const pIndex = Array.from(grandpa.children).findIndex(
          (node) => node == directParent
        );
        // Find the index previous sibling that is not a text
        const siblingIndex = Array.from(grandpa.children).findLastIndex(
          (node, index) => index < pIndex && node.type == "element"
        );
        const sibling = grandpa.children[siblingIndex] as Parents;
        sibling.children = [...Array.from(sibling.children), node];
        grandpa.children = Array.from(grandpa.children).toSpliced(
          siblingIndex + 1,
          pIndex - siblingIndex + 1
        );
        return SKIP;
      }
    });
  };
};
