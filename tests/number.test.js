const {add, subtract, multiply, divide} = require('./numbers')

test('add', () => {
  expect(add(1, 2)).toBe(3)
})
// test for subtract
test('subtract', () => {
  expect(subtract(2, 1)).toBe(1)
})

// test for multiply
test('multiply', () => {
  expect(multiply(2, 2)).toBe(4)
})

// test for divide
test('divide', () => {
  expect(divide(4, 2)).toBe(2)
})
