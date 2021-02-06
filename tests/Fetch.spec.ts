import {Fetch} from '../src';

describe('Fetch', () => {
  describe('replies', () => {
    it('should return specified response ONLY ONCE', async () => {
      Fetch.replies({message: 'Hello, jestil'});
      const response = await fetch('https://otiai10.com/any/domain/or/path');
      const body = await response.json();
      expect(body.message).toBe('Hello, jestil');
    });
  });
});
