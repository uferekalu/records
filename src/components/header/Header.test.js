import { screen, render } from "@testing-library/react"

import Header from "./Header"

describe('<Header />', () => {
    it('has a title h3', () => {
        render(<Header />)

        const el = screen.getByTestId('recordTitle')

        expect(el.innerHTML).toBe('Employees Record')
    })

    it('has an admin button', () => {
        render(<Header />)

        const el = screen.getByTestId('btnAdmin')

        expect(el.innerHTML).toBe('Admin')
    })
})