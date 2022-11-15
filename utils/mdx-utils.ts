import { remove } from "unist-util-remove";
import { select } from "hast-util-select";
import { toText } from "hast-util-to-text";

export const remarkExtractTitle = () => {
  return (tree: Parameters<typeof select>[1]) => {
    console.log(tree);
    const h1 = select("h1", tree);
    if (!h1) {
      return null;
    }
    // Create a single text element whose value is the h1 content
    return { type: "text", value: toText(h1) };
  };
};

export const rehypeRemoveTitle = () => {
  return (tree: Parameters<typeof remove>[0]) => {
    remove(tree, { type: "element", tagName: "h1" });
  };
};
