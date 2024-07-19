function testFunction() {
  return 1;
}

describe('testFunction', () => {
  it('should return 1', () => {
    expect(testFunction()).toBe(1);
  });
});
