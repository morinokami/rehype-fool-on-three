import type { Root } from "hast";
import { heading } from "hast-util-heading";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const rehypeFoolOnThree: Plugin<[], Root> = () => {
	return (tree) => {
		let hCount = 0;
		visit(tree, "element", (node) => {
			if (heading(node)) {
				hCount += 1;
				if (hCount && (hCount % 3 === 0 || String(hCount).includes("3"))) {
					let textFound = false;
					visit(node, (subNode) => {
						if (!textFound && subNode.type === "text") {
							subNode.value = `🤪 ${subNode.value}`;
							textFound = true;
						}
					});
					if (!textFound) {
						node.children.unshift({
							type: "text",
							value: "🤪",
						});
					}
				}
			}
		});
	};
};

export default rehypeFoolOnThree;
