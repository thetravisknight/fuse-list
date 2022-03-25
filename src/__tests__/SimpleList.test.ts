import { sl } from '../index';
test('SL', () => {
	expect(sl(['a', 'b', 'c'])).toBe("a, b and c");
	expect(sl(['a', 'b', 'c'], { separator: ',' })).toBe("a,b and c");
	expect(sl(['a', 'b', 'c'], { separator: ':', finalSeparator: "-" })).toBe("a:b-c");
	expect(sl(['a', 'b', 'c'], { finalSeparator: false })).toBe("a, b, c")
	expect(sl(['a', 'b', 'c'], { finalSeparator: ' & ' })).toBe("a, b & c");
	expect(sl(['a', 'b', 'c'], { itemPrefix: '-', itemSuffix: '/', finalSeparator: ' & ' })).toBe("-a/, -b/ & -c/");
	expect(sl(['a', 'b', 'c'], { itemPrefix: '-', itemSuffix: '/', finalSeparator: ' & ', separatorPosition: 'beforeSuffix' })).toBe("-a, /-b & /-c/");
});
