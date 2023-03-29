import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { employeesData } from './employeesData';

const renderApp = (employees) => render(<App employeesData={employeesData} />)

const testIds = {
  filterInput: "filter-input",
  employeesList: "employees-list",
};

beforeEach(() => {
});

afterEach(() => {
  cleanup();
});

test("Initial UI renders correctly", () => {
  const { getByTestId, getAllByTestId } = renderApp(employeesData)
  const filterInput = screen.getByTestId(testIds.filterInput)
  expect(filterInput).toBeVisible()
  expect(filterInput).toHaveValue("")
})

test("has a container div", () => {
  renderApp(employeesData)
  const el = screen.getByTestId("container")
  expect(el.className).toBe('container')
})
