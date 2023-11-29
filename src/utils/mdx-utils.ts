import { dirname, join } from "node:path";

import type { Parent } from "unist";
import fs from "node:fs/promises";
// import { toText } from "mdast-util-to-text";
import { is } from "unist-util-is";
import { remove } from "unist-util-remove";
import { select } from "unist-util-select";
import { visit } from "unist-util-visit";

export const remarkExtractTitle = () => {
  return (tree: Parameters<typeof select>[1]) => {
    // console.log(inspect(tree));
    const heading = select("heading[depth=1]", tree);
    // @ts-expect-error
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

export const rehypeAddAltText = () => {
  return async (tree: any, vfile: any) => {
    const attributesToProcess: any[] = [];
    visit(tree, { name: "astro-image" }, function (node) {
      const alt = node.attributes.find(
        (attribute: any) => attribute.name === "alt"
      );
      if (alt && alt.value.startsWith("file:")) {
        attributesToProcess.push(alt);
      }
    });
    await Promise.all(
      attributesToProcess.map(async (alt) => {
        const fileContent = await fs.readFile(
          join(dirname(vfile.history[0]), alt.value.replace("file:", "")),
          "utf8"
        );
        alt.value = fileContent;
      })
    );
    return tree;
  };
};
