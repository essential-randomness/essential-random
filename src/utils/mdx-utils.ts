import { Parent } from "unist";
// import { toText } from "mdast-util-to-text";
import { inspect } from "util";
import { is } from "unist-util-is";
import { remove } from "unist-util-remove";
import { select } from "unist-util-select";

export const remarkExtractTitle = () => {
  return (tree: Parameters<typeof select>[1]) => {
    console.log(inspect(tree));
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
