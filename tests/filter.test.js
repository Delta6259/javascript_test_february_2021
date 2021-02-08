const Data = require('../data').data
const Utils = require('../utils')
const Expectation = require('./expectations/filter')

describe('Testing animal filter', () => {
    describe("When 'ry' term is given", () => {
        it('should return countries containing animals matching with the term', () => {
            const countries = Utils.filterDataFromAnimalTerm({
                countries: Data,
                animalTerm: 'ry'
            })
            expect(countries).toEqual(Expectation.ryTerm())
        })
    })

    describe("When 'Gia' term is given", () => {
        it('should return countries containing animals matching with the term', () => {
            const countries = Utils.filterDataFromAnimalTerm({
                countries: Data,
                animalTerm: 'Gia'
            })
            expect(countries).toEqual(Expectation.giaTerm())
        })
    })

    describe("When no filter is given", () => {
        it('should return the full data list', () => {
            const countries = Utils.filterDataFromAnimalTerm({
                countries: Data
            })
            expect(countries).toEqual(Data)
        })
    })
})