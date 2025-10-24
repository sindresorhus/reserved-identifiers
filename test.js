import test from 'ava';
import reservedIdentifiers, {typeScriptReservedTypes} from './index.js';

test('main', t => {
	t.true(reservedIdentifiers().has('await'));
	t.false(reservedIdentifiers().has('globalThis'));
	t.true(reservedIdentifiers({includeGlobalProperties: true}).has('globalThis'));
});

test('typeScriptReservedTypes', t => {
	const types = typeScriptReservedTypes();
	t.true(types.has('any'));
	t.false(types.has('await')); // Should not contain JavaScript keywords that aren't TS types
});
