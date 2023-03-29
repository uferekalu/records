import { screen, render } from '@testing-library/react'
import Enzyme, { mount } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Sidebar from './Sidebar'

Enzyme.configure({ adapter: new Adapter() });

const setIsEmployees = jest.fn()
const setIsEditEmployees = jest.fn()
const setIsEmployeeDetails = jest.fn()
const setIsModifyEmployees = jest.fn()

describe('<Sidebar />', () => {
    it('has a logo', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const logoImg = screen.getByRole('image')
        expect(logoImg).toHaveAttribute('src', `${process.env.PUBLIC_URL}/assets/images/icon.png`)
        expect(logoImg.className).toBe("sidebar__logo")
    })

    it('has a title h4', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const el = screen.getByTestId("sidebar-title")
        expect(el.className).toBe("sidebar-title")
        expect(el.innerHTML).toBe("Employees Data")
    })

    it('has a search input field', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const el = screen.getByTestId('search')
        expect(el.className).toBe('search')
    })

    it('has an employee image icon', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const imgRole = screen.getByRole("employeeicon")
        expect(imgRole).toHaveAttribute('src', `${process.env.PUBLIC_URL}/assets/images/employeeicon.png`)
        expect(imgRole.className).toBe("employeeicon")
    })

    it('has a title of "Employees"', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const el = screen.getByTestId("sidebar__employees")
        expect(el.innerHTML).toBe("Employees")
        expect(el.className).toBe("sidebar__employees")
    })

    it('has an employee edit icon', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const editIcon = screen.getByRole("employee")
        expect(editIcon).toHaveAttribute('src', `${process.env.PUBLIC_URL}/assets/images/editemployee.png`)
        expect(editIcon.className).toBe("employee__logo")
    })

    it('has a title of "Edit Employees"', () => {
        render(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)

        const el = screen.getByTestId("sidebar__edit-employees")
        expect(el.innerHTML).toBe("Edit Employees")
        expect(el.className).toBe("sidebar__edit-employees")
    })

    test('call setIsEmployees when employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#employees")

        employeeDiv.simulate("click")
        expect(setIsEmployees).toHaveBeenCalled()
    })
    test('call setIsEditEmployees when employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#employees")

        employeeDiv.simulate("click")
        expect(setIsEditEmployees).toHaveBeenCalled()
    })
    test('call setIsEmployeeDetails when employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#employees")

        employeeDiv.simulate("click")
        expect(setIsEmployeeDetails).toHaveBeenCalled()
    })
    test('call setIsModifyEmployees when employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#employees")

        employeeDiv.simulate("click")
        expect(setIsModifyEmployees).toHaveBeenCalled()
    })
    test('call setIsEmployees when edit-employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#edit-employees")

        employeeDiv.simulate("click")
        expect(setIsEmployees).toHaveBeenCalled()
    })
    test('call setIsEditEmployees when edit-employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#edit-employees")

        employeeDiv.simulate("click")
        expect(setIsEditEmployees).toHaveBeenCalled()
    })
    test('call setIsEmployeeDetails when edit-employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#edit-employees")

        employeeDiv.simulate("click")
        expect(setIsEmployeeDetails).toHaveBeenCalled()
    })
    test('call setIsModifyEmployees when edit-employees div is clicked', () => {
        const wrapper = mount(<Sidebar setIsEmployees={setIsEmployees} setIsEditEmployees={setIsEditEmployees}
            setIsEmployeeDetails={setIsEmployeeDetails} setIsModifyEmployees={setIsModifyEmployees} />)
        const employeeDiv = wrapper.find("div#edit-employees")

        employeeDiv.simulate("click")
        expect(setIsModifyEmployees).toHaveBeenCalled()
    })
})