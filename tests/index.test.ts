import {searchInsert} from '../src/index';

describe('the searchInsert function', () => {
	it('returns 0 for an empty list', () => {
		expect(searchInsert([], 1)).toBe(0);
	})
})
