import { screen, render, cleanup } from '@testing-library/react'
import EmployeesDetailsComp from './EmployeesDetailsComp';
import { employeesData } from '../../employeesData';

const testIds = {
    employeeDetailsContainer: "employees-details-container",
    employeeDetailsHeading: "employee-detail-heading"
}

const headings = [
    "Id",
    "Name",
    "Date Joined",
    "Role",
    "Level",
    "Country",
    "Email",
    "Address",
    "Department",
    "Actions"
]

const renderApp = (employees) => render(<EmployeesDetailsComp employeesData={employeesData} />)
beforeEach(() => {
});

afterEach(() => {
    cleanup();
});

test("Initially UI renders correctly", () => {
    renderApp(employeesData)

    const el = screen.getByTestId(testIds.employeeDetailsContainer)
    expect(el.className).toBe('employees-details-container')

    const employeeDetailsContainer = screen.getByTestId(testIds.employeeDetailsContainer)
    expect(employeeDetailsContainer).toBeVisible()

    const employeesHeading = screen.getAllByTestId(testIds.employeeDetailsHeading)
    expect(employeesHeading.length).toBe(headings.length)
    employeesHeading.forEach((heading, i) => {
        expect(heading.textContent).toBe(headings[i])
    })

})