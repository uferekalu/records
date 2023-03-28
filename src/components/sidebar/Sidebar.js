import './Sidebar.css'

export default function Sidebar(props) {
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
                    />
                </div>
                <div className='employees-holder'>
                    <img
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="employeeicon"
                        className='employeeicon'
                        src={process.env.PUBLIC_URL + "/assets/images/employeeicon.png"} alt="employee" />
                    <h5 data-testid="sidebar__employees" className='sidebar__employees'>
                        Employees
                    </h5>
                </div>
                <div className='edit-employees-holder'>
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