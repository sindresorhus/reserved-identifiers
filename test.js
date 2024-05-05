import test from 'ava';
import reservedIdentifiers from './index.js';

test('main', t => {
	t.true(reservedIdentifiers().has('await'));
	t.false(reservedIdentifiers().has('globalThis'));
	t.true(reservedIdentifiers({includeGlobalProperties: true}).has('globalThis'));
});
