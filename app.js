'use strict';

const args = require('yargs').argv;
const filterParamValue = args.filter
const countParamIsPresent = args['count']
const data = require('./data')

if (!filterParamValue || countParamIsPresent) {
    console.log(data)
    console.log('No parameters given : the full data list is given.')
    return
}

const mustFilter = ![null, undefined].includes(filterParamValue)
const mustCount =  ![null, undefined].includes(countParamIsPresent)

if (mustFilter) {
    console.log(`Filter data from ${filterParamValue}.`)
}

if (mustCount) {
    console.log('Data with counters.')
}