// https://262.ecma-international.org/14.0/#sec-keywords-and-reserved-words
// 14 is ES2023
const identifiers = [
	// Keywords
	'await',
	'break',
	'case',
	'catch',
	'class',
	'const',
	'continue',
	'debugger',
	'default',
	'delete',
	'do',
	'else',
	'enum',
	'export',
	'extends',
	'false',
	'finally',
	'for',
	'function',
	'if',
	'import',
	'in',
	'instanceof',
	'new',
	'null',
	'return',
	'super',
	'switch',
	'this',
	'throw',
	'true',
	'try',
	'typeof',
	'var',
	'void',
	'while',
	'with',
	'yield',

	// Future reserved keywords
	'implements',
	'interface',
	'package',
	'private',
	'protected',
	'public',

	// Not keywords, but still restricted
	'arguments',
	'eval',
];

// https://262.ecma-international.org/14.0/#sec-value-properties-of-the-global-object
const globalProperties = [
	'globalThis',
	'Infinity',
	'NaN',
	'undefined',
];

export default function reservedIdentifiers({includeGlobalProperties = false} = {}) {
	return new Set([
		...identifiers,
		...(includeGlobalProperties ? globalProperties : []),
	]);
}
