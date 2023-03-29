export function moderatedDates(data, fn) {
    const newData = []
    const dates = data.map((dt) => dt.dateJoined)
    const datesSet = new Set(dates)
    for (let date of datesSet) {
        newData.push(date)
    }
    fn(newData)
}
export function moderatedRoles(data, fn) {
    const newData = []
    const roles = data.map((dt) => dt.role)
    const rolesSet = new Set(roles)
    for (let role of rolesSet) {
        newData.push(role)
    }
    fn(newData)
}
export function moderatedCountries(data, fn) {
    const newData = []
    const countries = data.map((dt) => dt.country)
    const countriesSet = new Set(countries)
    for (let country of countriesSet) {
        newData.push(country)
    }
    fn(newData)
}
export function moderatedLevels(data, fn) {
    const newData = []
    const levels = data.map((dt) => dt.level)
    const levelsSet = new Set(levels)
    for (let level of levelsSet) {
        newData.push(level)
    }
    fn(newData)
}