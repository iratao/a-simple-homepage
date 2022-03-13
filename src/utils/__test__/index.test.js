import { capitalize } from '../index'

it('capitalize first letter', () => {
  expect(capitalize('abc')).toBe('Abc');
  expect(capitalize('123')).toBe('123');
  expect(capitalize({a: 'b'})).toBe('');
})