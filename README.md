# jestil

jest test utils, mocking global `Date`, and others stuff.

# Example

## Clock.freeze & release

```typescript
describe("Back to the Future", () => {
  describe("DeLorean", () => {
    it("can go back to the future", () => {

      // Freeze the clock
      const clock = Clock.freeze("1955-11-12 22:04:00");

      // new Date().getFullYear() == 1955
      expect(delorean.jump()).toBe(true);

      // Release the clock
      clock.release();

      // new Date().getFullYear() == 2021 (maybe)
      expect(delorean.jump()).toBe(false);

    });
  });
});
```

# Issues

- https://github.com/otiai10/jestil/issues
