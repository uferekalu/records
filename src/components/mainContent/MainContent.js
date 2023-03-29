import { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import './MainContent.css'

export default function MainContent(props) {
    const handleEmployeesDetails = () => {
        props.setIsEmployeeDetails(true)
        props.setIsModifyEmployees(false)
        props.setIsEmployees(true)
        props.setIsEditEmployees(false)
    }

    const handleModifyEmployees = () => {
        props.setIsModifyEmployees(true)
        props.setIsEmployeeDetails(false)
        props.setIsEmployees(false)
        props.setIsEditEmployees(true)
    }

    useEffect(() => {
        props.isModifyEmployees ? props.setIsEmployeeDetails(false) : props.setIsEmployeeDetails(true)
    }, [props.isModifyEmployees, props.setIsEmployeeDetails, props])
    return (
        <>
            <div className='main-content'>
                <div className='main-content__searchholder'>
                    <input
                        data-testid="filter-input"
                        className='main-content__search'
                        type="text"
                        placeholder="search"
                    />
                </div>
                <div>
                    <Form.Label
                        data-testid="employees-details-heading"
                        className={props.isEmployeesDetails ? "isEmployeeDetails" : "notEmployeeDetails"}
                        onClick={handleEmployeesDetails}
                    >
                        EMPLOYEES DETAILS
                    </Form.Label>
                    <Form.Label
                        data-testid="modify-employees-heading"
                        className={props.isModifyEmployees ? "isModifyEmployees" : "notModifyEmployees"}
                        onClick={handleModifyEmployees}>
                        MODIFY EMPLOYEES
                    </Form.Label>
                </div>
                <hr style={{
                    marginTop: '6.8px'
                }} />
                <div className='filtering-holder'>
                    <div style={{
                        display: "flex",
                        gap: '10px'
                    }}>
                        <select
                            data-testid="filterby-date-joined"
                            className='filterbydate'
                            onChange={(event) => props.setJoinedDate(event.target.value)}
                        >
                            <option value="">Filter by date joined</option>
                            {props.moderatedJoinedDates.length > 1 ? (
                                props.moderatedJoinedDates.map((date, idx) => (
                                    <option
                                        data-testid="date"
                                        key={idx}
                                        value={date}
                                    >
                                        {date}
                                    </option>
                                ))
                            ) : (
                                <option value={props.moderatedJoinedDates[0]}>
                                    {props.moderatedJoinedDates[0]}
                                </option>
                            )}
                        </select>
                        <select
                            data-testid="filterby-role"
                            className='filterbyrole'
                            onChange={(event) => props.setRole(event.target.value)}
                        >
                            <option value="">Filter by role</option>
                            {props.roles.length > 1 ? (
                                props.roles.map((role, idx) => (
                                    <option
                                        data-testid="role"
                                        key={idx}
                                        value={role}
                                    >
                                        {role}
                                    </option>
                                ))
                            ) : (
                                <option value={props.roles[0]}>{props.roles[0]}</option>
                            )}

                        </select>
                        <select
                            data-testid="filterby-country"
                            className='filterbycountry'
                            onChange={(event) => props.setCountry(event.target.value)}
                        >
                            <option value="">Filter by country</option>
                            {props.countries.length > 1 ? (
                                props.countries.map((country, idx) => (
                                    <option
                                        data-testid="country"
                                        key={idx}
                                        value={country}
                                    >
                                        {country}
                                    </option>
                                ))
                            ) : (
                                <option value={props.countries[0]}>{props.countries[0]}</option>
                            )}

                        </select>
                    </div>
                    <div
                        className='sort-holder'>
                        <Form.Label className='sort-label'>
                            Sort by
                        </Form.Label>
                        <select
                            data-testid="sortby-level"
                            className='sortby-level'
                            onChange={(event) => props.setLevel(event.target.value)}
                        >
                            <option value={""}>Level</option>
                            {props.levels.map((level, idx) => (
                                <option
                                    data-testid="level"
                                    key={idx}
                                    value={level}
                                >
                                    {level}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}