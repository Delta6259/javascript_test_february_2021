const Utils = {}

Utils.filterDataFromAnimalTerm = ({countries, animalTerm}) => {
    if (!animalTerm) return countries

    const stringIncludeTerm = ({string, animalTerm}) => {
        return string.includes(animalTerm)
    }

    const filterPeople = (country) => {
        return country
            .people
            .map(p => {
                return {
                    name: p.name,
                    animals: p.animals.filter(a => {
                        return stringIncludeTerm({
                            string: a.name,
                            animalTerm
                        })
                    })
                }
            })
            .filter(p => {
                return p.animals.length
            })
    }

    return countries
        .map((country) => {
            return {
                name: country.name,
                people: filterPeople(country)
            }
        }).filter(c => {
            return c.people.length
        })
}

Utils.appendCountersToListEntities = (countries) => {
    // append countries / people names with sub object counters

    return countries
        .map(country => {
            return {
                name: country.people.length ? country.name + ` [${country.people.length}]` : '',
                people: country.people.map(p => {
                    return {
                        name: p.animals.length ? p.name + ` [${p.animals.length}]` : '',
                        animals: p.animals
                    }
                })
            }
        })
}

module.exports = Utils