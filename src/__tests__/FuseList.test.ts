import { fuseList } from "../index";
test("FuseList", () => {
	expect(fuseList(["a", "b", "c"])).toBe("a, b and c");
	expect(fuseList([1, 2, 3], { separator: "; " })).toBe("1; 2 and 3");
	expect(fuseList([1, 2, 3], { separator: "; ", finalSeparator: null })).toBe("1; 2; 3");
	expect(fuseList(["a", "b", "c"], { separator: "," })).toBe("a,b and c");
	expect(fuseList(["a", "b", "c"], { separator: ":", finalSeparator: "-" })).toBe("a:b-c");
	expect(fuseList(["a", "b", "c"], { finalSeparator: false })).toBe("a, b, c")
	expect(fuseList(["a", "b", "c"], { finalSeparator: " & " })).toBe("a, b & c");
	expect(fuseList(["a", "b", "c"], { prefix: "<p>", suffix: "</p>", separator: false, finalSeparator: false })).toBe("<p>a</p><p>b</p><p>c</p>");
	expect(fuseList(["a", "b", "c"], { prefix: "-", suffix: "/", finalSeparator: " & " })).toBe("-a/, -b/ & -c/");
	expect(fuseList(["a", "b", "c"], { prefix: "-", suffix: "/", finalSeparator: " & ", separatorPosition: "beforeSuffix" })).toBe("-a, /-b & /-c/");
	expect(fuseList(["a", "b", "c"], { prefix: "-", suffix: "/", finalSeparator: " & ", separatorPosition: "beforeSuffix" })).toBe("-a, /-b & /-c/");
	expect(fuseList(["a", "b", "c"], { prefix: "<p>", suffix: "</p>", separatorPosition: "beforeSuffix" })).toBe("<p>a, </p><p>b and </p><p>c</p>");
	expect(fuseList(["a", "b", "c"], { prefix: "<p>", suffix: "</p>" })).toBe("<p>a</p>, <p>b</p> and <p>c</p>");
});
