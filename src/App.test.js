import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { employeesData } from './employeesData';

const renderApp = (employees) => render(<App employeesData={employeesData} />)

const testIds = {
  mainContainer: "main-container"
};

beforeEach(() => {
});

afterEach(() => {
  cleanup();
});

test("Initial UI renders correctly", () => {
  renderApp(employeesData)
  const mainContainer = screen.getByTestId(testIds.mainContainer)
  expect(mainContainer).toBeVisible()
})
