import { screen, render } from '@testing-library/react'
import Sidebar from './Sidebar'

describe('<Sidebar />', () => {
    it('has a logo', () => {
        render(<Sidebar />)

        const logoImg = screen.getByRole('image')
        expect(logoImg).toHaveAttribute('src', `${process.env.PUBLIC_URL}/assets/images/icon.png`)
        expect(logoImg.className).toBe("sidebar__logo")
    })

    it('has a title h4', () => {
        render(<Sidebar />)

        const el = screen.getByTestId("sidebar-title")
        expect(el.className).toBe("sidebar-title")
        expect(el.innerHTML).toBe("Employees Data")
    })

    it('has a search input field', () => {
        render(<Sidebar />)

        const el = screen.getByTestId('search')
        expect(el.className).toBe('search')
    })

    it('has an employee image icon', () => {
        render(<Sidebar />)

        const imgRole = screen.getByRole("employeeicon")
        expect(imgRole).toHaveAttribute('src', `${process.env.PUBLIC_URL}/assets/images/employeeicon.png`)
        expect(imgRole.className).toBe("employeeicon")
    })

    it('has a title of "Employees"', () => {
        render(<Sidebar />)

        const el = screen.getByTestId("sidebar__employees")
        expect(el.innerHTML).toBe("Employees")
        expect(el.className).toBe("sidebar__employees")
    })

    it('has an employee edit icon', () => {
        render(<Sidebar />)

        const editIcon = screen.getByRole("employee")
        expect(editIcon).toHaveAttribute('src', `${process.env.PUBLIC_URL}/assets/images/editemployee.png`)
        expect(editIcon.className).toBe("employee__logo")
    })

    it('has a title of "Edit Employees"', () => {
        render(<Sidebar />)

        const el = screen.getByTestId("sidebar__edit-employees")
        expect(el.innerHTML).toBe("Edit Employees")
        expect(el.className).toBe("sidebar__edit-employees")
    })
})