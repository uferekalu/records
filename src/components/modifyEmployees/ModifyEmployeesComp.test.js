import { screen, render, cleanup } from '@testing-library/react'
import { employeesData } from '../../employeesData';
import ModifyEmployeesComp from './modifyEmployeesComp';

const testIds = {
    modifyEmployeesContainer: "modify-employees-container",
    modifyEmployeeHeading: "modify-employee-heading"
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

const renderApp = (employees) => render(<ModifyEmployeesComp employeesData={employeesData} />)
beforeEach(() => {
});

afterEach(() => {
    cleanup();
});

test("Initially UI renders correctly", () => {
    renderApp(employeesData)

    const el = screen.getByTestId(testIds.modifyEmployeesContainer)
    expect(el.className).toBe('modify-employees-container')

    const modifyEmployeeContainer = screen.getByTestId(testIds.modifyEmployeesContainer)
    expect(modifyEmployeeContainer).toBeVisible()

    const modifyHeading = screen.getAllByTestId(testIds.modifyEmployeeHeading)
    expect(modifyHeading.length).toBe(headings.length)
    modifyHeading.forEach((heading, i) => {
        expect(heading.textContent).toBe(headings[i])
    })

})