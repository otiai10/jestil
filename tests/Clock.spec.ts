/* eslint-disable max-len */

import {Clock} from '../src';

describe('Clock', () => {
  describe('freeze', () => {
    it('freezes global Date object', () => {
      const realThisYear = (new Date()).getFullYear();
      const clock = Clock.freeze('2021-02-06 10:00:00');
      expect(new Date().getDate()).toBe(6);
      clock.update('2021-02-08 10:00:00');
      expect(new Date().getDate()).toBe(8);

      const rand = [
        `${realThisYear + Math.ceil(Math.random() * 400)}-${Math.ceil(Math.random() * 12)}-${Math.ceil(Math.random() * 30)}`,
        `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}`,
      ].join(' ');

      clock.update(rand);
      expect(new Date().toString()).toBe(clock.frozen().toString());
      const mockedYear = new Date().getFullYear();

      clock.release();
      // No longer the same after released
      expect(new Date().getFullYear()).not.toBe(mockedYear);
    });
  });
});
