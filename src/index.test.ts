import fs from "node:fs";
import { rehype } from "rehype";
import { describe, expect, test } from "vitest";

import rehypeFooleOnThree from "./index";

function readFixture(name: string): string {
	return fs.readFileSync(
		new URL(`./fixtures/${name}`, import.meta.url),
		"utf8",
	);
}

describe("rehypeFoolOnThree", async () => {
	test.each([
		["a.html", "a.out.html"],
		["b.html", "b.out.html"],
	])("%s", async (input, expected) => {
		const file = await rehype()
			.data("settings", { fragment: true })
			.use(rehypeFooleOnThree)
			.process(readFixture(input));

		expect(file.toString()).toBe(readFixture(expected));
	});
});
