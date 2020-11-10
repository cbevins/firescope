import { Input, Output } from './Variables.js'

test('1: How many Variables are there?', () => {
  expect(Object.keys(Input).length).toEqual(12)
  expect(Object.keys(Output).length).toEqual(26)
})
