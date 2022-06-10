import { getWalkerCities } from "./database.js";

import { getCities } from "./database.js";

const walkerCitiesArray = getWalkerCities()
const citiesArray = getCities()

export const filterWalkerCitiesByWalker = (walker) => {
    const assignments = []
    for (const walkerCity of walkerCitiesArray) {
        if( walkerCity.walkerId === walker.id){
            assignments.push(walkerCity)
        }
    }
    return assignments
}

export const assignedCityNames = (assignments) => {
    let cityNames = ``
    for (const assignment of assignments) {
        for (const city of citiesArray) {
            if(city.id === assignment.cityId){
                cityNames += `-${city.name}`
            }
        }
    }
    return cityNames
}

