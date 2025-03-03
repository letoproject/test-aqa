// In the first test, we'll add 2 and 2 and expect the outcome to equal 4 - this test will pass
// In the second test, we'll add 3 and 5 and expect the outcome to equal 7 - this test will fail

function sum(a, b) {
  return a + b;
}
// module.exports = sum;

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("adds 3 + 5 to equal 7", () => {
  expect(sum(3, 5)).toBe(8);
});
