test('add', () => {
  expect(add(1, 2)).toBe(3);
});

// test for subtract
test('subtract', () => {
  expect(subtract(2, 1)).toBe(1);
});

function subtract(a, b) {
  return a - b;
}
