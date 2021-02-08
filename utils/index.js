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

Utils.appendCountersToListEntities = (data) => {
    // append countries / people names with sub object counters

    return 'TEST2'
}

module.exports = Utils