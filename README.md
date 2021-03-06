# jestil

jest test utils, mocking global `Date`, and other stuff.


[![JavaScript CI](https://github.com/otiai10/jestil/workflows/JavaScript%20CI/badge.svg)](https://github.com/otiai10/jestil/actions?query=workflow%3A%22JavaScript+CI%22)
[![npm version](https://badge.fury.io/js/jestil.svg)](https://badge.fury.io/js/jestil)
[![npm download](https://img.shields.io/npm/dt/jestil.svg)](https://www.npmjs.com/package/jestil)
[![codecov](https://codecov.io/gh/otiai10/jestil/branch/main/graph/badge.svg?token=Pde7yW9nef)](https://codecov.io/gh/otiai10/jestil)
[![Maintainability](https://api.codeclimate.com/v1/badges/384382f3414cc21ad50a/maintainability)](https://codeclimate.com/github/otiai10/jestil/maintainability)

# Example

## Clock.freeze & release

```typescript
import {Clock} from "jestil";

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

## Fetch.replies

```typescript
import {Fetch} from "jestil";

describe('SchrodingerCat', () => {
  describe('exists', () => {
    it('should return its existence', async () => {

      // Define the response you want for any "fetch" call.
      Fetch.replies({message: 'Hey, I must exist!', status: 200});

      // Even it'll be called inside your method.
      const response = await SchrodingerCat.askInsideBox();

      // The response will be what you specified.
      expect(response.message).toBe('Hey, I must exist!');
      expect(response.status).toBe(200);

    });
  });
});
```

# Issues

- https://github.com/otiai10/jestil/issues
