import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { employeesData } from './employeesData';

const renderApp = (employees) => render(<App employeesData={employeesData} />)

const testIds = {
  filterInput: "filter-input",
  employeeDetailsHeading: "employees-details-heading",
  modifyEmployeeHeading: "modify-employees-heading",
  employeesList: "employees-list",
  filterByDateJoined: "filterby-date-joined",
  filterByRole: "filterby-role",
  filterByCountry: "filterby-country",
  sortByLevel: "sortby-level"
};

const joinedDates = [
  "22-10-2018",
  "22-09-2019",
  "02-10-2018"
]

const roles = [
  "Fullstack Javascript Developer",
  "Frontend Developer",
  "Backend Developer"
]

const countries = [
  "USA",
  "Nigeria",
  "India",
  "Austrialia"
]

const levels = [
  "Senior developer",
  "Mid level developer",
  "Junior developer"
]

beforeEach(() => {
});

afterEach(() => {
  cleanup();
});

test("Initial UI renders correctly", () => {
  renderApp(employeesData)
  const filterInput = screen.getByTestId(testIds.filterInput)
  expect(filterInput).toBeVisible()
  expect(filterInput).toHaveValue("")

  const employeeDetailsHeading = screen.getByTestId(testIds.employeeDetailsHeading)
  expect(employeeDetailsHeading).toBeVisible()

  const modifyEmployeesHeading = screen.getByTestId(testIds.modifyEmployeeHeading)
  expect(modifyEmployeesHeading).toBeVisible()

  const filterByJoinedDate = screen.getByTestId(testIds.filterByDateJoined)
  expect(filterByJoinedDate).toBeVisible()
  expect(filterByJoinedDate).toHaveValue("")

  const renderedJoinedDates = screen.getAllByTestId("date")
  expect(renderedJoinedDates.length).toBe(joinedDates.length)
  renderedJoinedDates.forEach((date, i) => {
    expect(date.textContent).toBe(joinedDates[i])
  })

  const filteredRoles = screen.getByTestId(testIds.filterByRole)
  expect(filteredRoles).toBeVisible()
  expect(filteredRoles).toHaveValue("")

  const renderedRoles = screen.getAllByTestId("role")
  expect(renderedRoles.length).toBe(roles.length)
  renderedRoles.forEach((role, i) => {
    expect(role.textContent).toBe(roles[i])
  })

  const filteredCountries = screen.getByTestId(testIds.filterByCountry)
  expect(filteredCountries).toBeVisible()
  expect(filteredCountries).toHaveValue("")

  const renderedCountries = screen.getAllByTestId("country")
  expect(renderedCountries.length).toBe(countries.length)
  renderedCountries.forEach((country, i) => {
    expect(country.textContent).toBe(countries[i])
  })

  const filteredLevels = screen.getByTestId(testIds.sortByLevel)
  expect(filteredLevels).toBeVisible()
  expect(filteredLevels).toHaveValue("")

  const renderedLevels = screen.getAllByTestId("level")
  expect(renderedLevels.length).toBe(levels.length)
  renderedLevels.forEach((level, i) => {
    expect(level.textContent).toBe(levels[i])
  })
})

test("has a container div", () => {
  renderApp(employeesData)
  const el = screen.getByTestId("container")
  expect(el.className).toBe('container')
})
