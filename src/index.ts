// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

/**
 * Clock freezes and mocks global "Date".
 */
export class Clock {
  /**
   * @param {jest.SpyInstance} spied
   */
  constructor(private spied: jest.SpyInstance) {}

  /**
   * @param {string} datestring
   * @return {Clock}
   */
  static freeze(datestring: string): Clock {
    const mocked = new Date(datestring);
    const spied = jest.spyOn(global, 'Date').mockImplementation(() => mocked);
    Date.now = jest.fn().mockReturnValue(mocked.getTime());
    return new this(spied);
  }

  /**
   * @param {number?|string?} since
   * @param {number?|string?} until
   * @return {Clock}
   */
  static random(
      since: number|string = 0,
      until?: number|string,
  ): Clock {
    const sincetime: number = typeof since == 'string' ?
      (new Date(since)).getTime() : since;
    const untiltime: number = typeof until == 'string' ?
      (new Date(until)).getTime() :
      new Date(until || (20 * 365 * 24 * 60 * 60 * 1000)).getTime();
    const mocked = new Date(
        sincetime + Math.floor(Math.random() * (untiltime - sincetime)),
    );
    return this.freeze(mocked.toString());
  }

  /**
   * @param {string} datestring
   * @return {Clock}
   */
  update(datestring: string): Clock {
    this.release();
    const mocked = new Date(datestring);
    const spied = jest.spyOn(global, 'Date').mockImplementation(() => mocked);
    Date.now = jest.fn().mockReturnValue(mocked.getTime());
    this.spied = spied;
    return this;
  }

  /**
   * @return {Date}
   */
  frozen(): Date {
    return (this.spied.getMockImplementation() as () => Date)();
  }

  /**
   * release
   * @return {void}
   */
  release(): void {
    return this.spied.mockRestore();
  }
}
