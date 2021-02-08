'use strict';

const args = require('yargs').argv;
const _ = require('lodash')
const filterParamValue = args.filter
const countParamIsPresent = args['count']
const mustFilter = ![null, undefined].includes(filterParamValue)
const mustCount = ![null, undefined].includes(countParamIsPresent)
const data = require('./data').data
const Utils = require('./utils')

if (!mustFilter && !mustCount) {
    console.log(data)
    console.log('No parameters given : the full data list is returned.')
    return
}

if (mustFilter) {
    // Filter the country list from animal term.
    console.log(`Filter data from ${filterParamValue}.`)
    const countries = Utils.filterDataFromAnimalTerm({
        countries: data,
        animalTerm: filterParamValue
    })
    console.log(JSON.stringify(countries))
    return countries
}

if (mustCount) {
    // Append counters to entity names.
    console.log('Data with counters.')
    const countries = Utils.appendCountersToListEntities(data)
    console.log(JSON.stringify(countries))
    return countries
}