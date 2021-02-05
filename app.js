'use strict';

const args = require('yargs').argv;
const _ = require('lodash')
const filterParamValue = args.filter
const countParamIsPresent = args['count']
const mustFilter = ![null, undefined].includes(filterParamValue)
const mustCount =  ![null, undefined].includes(countParamIsPresent)
const data = require('./data')

if (!mustFilter && !mustCount) {
    console.log(data)
    console.log('No parameters given : the full data list is given.')
    return
}

if (mustFilter) {
    console.log(`Filter data from ${filterParamValue}.`)
}

if (mustCount) {
    console.log('Data with counters.')
}