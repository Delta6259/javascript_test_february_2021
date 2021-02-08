const Data = require('../data').data
const Utils = require('../utils')
const Expectation = require('./expectations/count')

describe('Testing Counters', () => {
    it('should return the full list with appended counters', () => {
        const countries = Utils.appendCountersToListEntities(Data)
        expect(countries).toEqual(Expectation)
    })
})