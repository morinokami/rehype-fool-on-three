import type { Root } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const rehypeFoolOnThree: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, "element", (node, index) => {
			if (
				node.tagName === "h1" ||
				node.tagName === "h2" ||
				node.tagName === "h3" ||
				node.tagName === "h4" ||
				node.tagName === "h5" ||
				node.tagName === "h6"
			) {
				// TODO:
			}
		});
	};
};

export default rehypeFoolOnThree;
