import { useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar(props) {
    const handleIsEmployees = () => {
        props.setIsEmployees(true)
        props.setIsEditEmployees(false)
        props.setIsEmployeeDetails(true)
        props.setIsModifyEmployees(false)
    }
    const handleIsEditEmployees = () => {
        props.setIsEditEmployees(true)
        props.setIsEmployees(false)
        props.setIsEmployeeDetails(false)
        props.setIsModifyEmployees(true)
    }

    useEffect(() => {
        props.isEditEmployees ? props.setIsEmployees(false) : props.setIsEmployees(true)
    }, [props.setIsEmployees, props.isEditEmployees, props])
    return (
        <>
            <div className="sidebar">
                <div className="logo-container">
                    <img
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="image"
                        className='sidebar__logo'
                        src={process.env.PUBLIC_URL + "/assets/images/icon.png"} alt="logo" />
                </div>
                <div className='sidebar-header'>
                    <h4 data-testid="sidebar-title" className='sidebar-title'>
                        Employees Data
                    </h4>
                </div>
                <div className='search-holder'>
                    <input
                        data-testid="search"
                        className='search'
                        type='text'
                        placeholder='Search for an employee'
                        onChange={props.filterMethod}
                    />
                </div>
                <div
                    id="employees"
                    onClick={handleIsEmployees}
                    style={
                        props.isEmployees ? {
                            background: "#A6A6A6",
                            width: "80%",
                            borderRadius: "5px"
                        } : {
                        }
                    } className='employees-holder'>
                    <img
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="employeeicon"
                        className='employeeicon'
                        src={process.env.PUBLIC_URL + "/assets/images/employeeicon.png"} alt="employee" />
                    <h5 data-testid="sidebar__employees" className='sidebar__employees'>
                        Employees
                    </h5>
                </div>
                <div
                    id="edit-employees"
                    style={
                        props.isEditEmployees ? {
                            background: "#A6A6A6",
                            width: "80%",
                            borderRadius: "5px"
                        } : {
                        }
                    }
                    onClick={handleIsEditEmployees}
                    className='edit-employees-holder'>
                    <img
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="employee"
                        className='employee__logo'
                        src={process.env.PUBLIC_URL + "/assets/images/editemployee.png"} alt="edit" />
                    <h5 data-testid="sidebar__edit-employees" className='sidebar__edit-employees'>
                        Edit Employees
                    </h5>
                </div>
            </div>
        </>
    )
}