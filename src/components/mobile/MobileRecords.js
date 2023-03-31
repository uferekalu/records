import { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import DetailModal from "../modal/detailModal";
import EditModal from "../modal/editModal";
import MobileRecordsContents from "./mobileRecordsContents";

const initialInfoState = {
    id: "",
    name: "",
    dateJoined: "",
    role: "",
    level: "",
    country: "",
    email: "",
    address: "",
    department: ""
}

export default function MobileRecords(props) {
    const ref = useRef()
    const [menuDropdown, setMenuDropdown] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [employeeId, setEmpoyeeId] = useState()
    const [fullInfo, setFullInfo] = useState(initialInfoState)
    const [details, setDetails] = useState(false)
    const [editModal, setEditModal] = useState(false)

    const [editId, setEditId] = useState()
    const [employeeName, setEmployeeName] = useState("")
    const [dateJoined, setDateJoined] = useState("")
    const [editRole, setEditRole] = useState("")
    const [editLevel, setEditLevel] = useState("")
    const [editCountry, setEditCountry] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [department, setDepartment] = useState("")

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

    const onChangeEmployeeName = (event) => {
        setEmployeeName(event.target.value)
    }
    const onChangeEmployeeId = (event) => {
        setEditId(event.target.value)
    }
    const onChangeDateJoined = (event) => {
        setDateJoined(event.target.value)
    }
    const onChangeEditRole = (event) => {
        setEditRole(event.target.value)
    }
    const onChangeEditLevel = (event) => {
        setEditLevel(event.target.value)
    }
    const onChangeEditCountry = (event) => {
        setEditCountry(event.target.value)
    }
    const onChangeEditEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value)
    }
    const onChangeDepartment = (event) => {
        setDepartment(event.target.value)
    }

    const handleEdit = () => {
        const data = props.employeesData.filter((data) => data.id === editId)[0]
        console.log("data", data)
        data.name = employeeName
        data.dateJoined = dateJoined
        data.role = editRole
        data.level = editLevel
        data.country = editCountry
        data.email = email
        data.address = address
        data.department = department


        props.employeesData.splice(editId, 1, data)
        setEditModal(false)
    }

    useEffect(() => {
        props.isEditEmployees ? props.setIsEmployees(false) : props.setIsEmployees(true)
    }, [props.setIsEmployees, props.isEditEmployees, props])

    useEffect(() => {
        const handler = (event) => {
            if (menuDropdown && ref.current && !ref.current.contains(event.target)) {
                setMenuDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
        };
    }, [menuDropdown]);

    const handleSetDetails = () => {
        setDetails(false)
    }

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
            <div>
                <div
                    ref={ref}
                    style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        padding: '20px'
                    }}>
                    <img
                        style={{
                            marginTop: "-5px"
                        }}
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="image"
                        className='sidebar__logo'
                        src={process.env.PUBLIC_URL + "/assets/images/invoice-logo.png"} alt="logo" />
                    <Form.Label style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "black"
                    }}>
                        Employees Record
                    </Form.Label>
                    <Button style={{
                        background: "transparent",
                        border: "1px solid #00902F",
                        padding: "4px",
                        borderRadius: "5px",
                        color: "#00902F",
                        cursor: "pointer",
                        width: "20%",
                        height: "25px",
                        fontSize: "12px",
                        fontWeight: 500
                    }}>
                        Admin
                    </Button>
                    {menuDropdown ? (
                        <img
                            onClick={() => setMenuDropdown((prevState) => !prevState)}
                            style={{
                                width: "16px",
                                height: '13px'
                            }}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="image"
                            className='sidebar__logo'
                            src={process.env.PUBLIC_URL + "/assets/images/close.png"} alt="logo" />
                    ) : (
                        <img
                            onClick={() => setMenuDropdown((prevState) => !prevState)}
                            style={{
                                width: "16px",
                                height: '13px'
                            }}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="image"
                            className='sidebar__logo'
                            src={process.env.PUBLIC_URL + "/assets/images/mobileham.png"} alt="logo" />
                    )}
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: 'flex-end',
                    gap: '10px',
                    padding: '15px',
                    marginTop: '-20px'
                }}>
                    <div style={isSearch ? {
                        position: "absolute",
                        top: "7rem",
                        right: "25px"
                    } : {
                        display: 'none'
                    }}>
                        <img
                            onClick={() => setIsSearch(false)}
                            style={{
                                width: "12px",
                                height: '12px'
                            }}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="image"
                            className='sidebar__logo'
                            src={process.env.PUBLIC_URL + "/assets/images/close.png"} alt="logo" />
                    </div>
                    {isSearch && (
                        <input style={{
                            height: "20px",
                            padding: '5px 8px',
                            border: "1px solid #A6A6A6",
                            borderRadius: '5px',
                            width: "70%"
                        }} type="text" placeholder="search" />
                    )}
                    <img
                        style={isSearch ? {
                            display: 'none'
                        } : {
                            width: "20px",
                            maxWidth: "100%",
                            height: '20px'
                        }}
                        onClick={() => setIsSearch(true)}
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="image"
                        className='sidebar__logo'
                        src={process.env.PUBLIC_URL + "/assets/images/search.png"} alt="logo" />
                </div>
                <div
                    style={menuDropdown ? {
                        display: 'block',
                        position: "absolute",
                        top: "5rem",
                        left: "20px",
                        border: '1px solid #E7E7E7',
                        width: "18rem",
                        padding: '5px 10px',
                        zIndex: 9,
                        background: "linear-gradient(90deg, #00902F 0%, #7CC427 99.69%)",
                        height: "70vh"
                    } : {
                        display: 'none',
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: "10px"
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img
                                style={{
                                    marginTop: "-5px",
                                }}
                                // eslint-disable-next-line jsx-a11y/aria-role
                                role="image"
                                className='sidebar__logo'
                                src={process.env.PUBLIC_URL + "/assets/images/icon.png"} alt="logo" />
                        </div>
                        <Form.Label style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "14px",
                            marginTop: "20px",
                        }}>
                            Employees Data
                        </Form.Label>
                        <div>
                            <input style={{
                                border: "1px solid gray",
                                padding: "7px",
                                borderRadius: "5px",
                                marginTop: "20px",
                                width: '90%'
                            }}
                                data-testid="search"
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
                                    width: "90%",
                                    borderRadius: "5px"
                                } : {
                                }
                            } className='employees-holder'>
                            <img
                                // eslint-disable-next-line jsx-a11y/aria-role
                                role="employeeicon"
                                className='employeeicon'
                                src={process.env.PUBLIC_URL + "/assets/images/employeeicon.png"} alt="employee" />
                            <h5 style={{
                                color: 'white'
                            }} data-testid="sidebar__employees" className='sidebar__employees'>
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
                            <h5 style={{
                                color: 'white'
                            }} data-testid="sidebar__edit-employees" className='sidebar__edit-employees'>
                                Edit Employees
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                padding: '20px'
            }}>
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
                <hr style={{
                    marginTop: '6.8px'
                }} />
            </div>
            <div style={{
                display: "flex",
                gap: '10px',
                padding: '15px',
            }}>
                <select
                    style={{
                        width: '49%',
                        border: "1px solid #e7e7e7",
                        padding: '8px'
                    }}
                    data-testid="filterby-date-joined"
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
                    style={{
                        width: '49%',
                        border: "1px solid #e7e7e7",
                        padding: '8px'
                    }}
                    data-testid="filterby-role"
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
            </div>
            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                gap: '10px',
                padding: '20px',
                width: '100%'
            }}>
                <select
                    style={{
                        width: '49%'
                    }}
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
                <div
                    style={{
                        width: '100%',
                        marginLeft: 'auto'
                    }}
                    className='sort-holder'>
                    <Form.Label className='sort-label'>
                        Sort by
                    </Form.Label>
                    <select
                        style={{

                        }}
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
            {props.searchTerm?.length > 2 ? (
                props.employeesData.slice(0, 10)
                    .map((data, idx) =>
                        data.id.toString().includes(props.searchTerm) ? (
                            <div key={idx}>
                                <MobileRecordsContents
                                    idx={idx}
                                    data={data}
                                    id={data.id}
                                    isEmployeesDetails={props.isEmployeesDetails}
                                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                                    isModifyEmployees={props.isModifyEmployees}
                                    setIsModifyEmployees={props.setIsModifyEmployees}
                                    isEmployees={props.isEmployees}
                                    setIsEmployees={props.setIsEmployees}
                                    isEditEmployees={props.isEditEmployees}
                                    setIsEditEmployees={props.setIsEditEmployees}
                                    filterMethod={props.filterMethod}
                                    searchTerm={props.searchTerm}
                                    moderatedJoinedDates={props.moderatedJoinedDates}
                                    joinedDate={props.joinedDate}
                                    setJoinedDate={props.setJoinedDate}
                                    roles={props.roles}
                                    setRoles={props.setRoles}
                                    role={props.role}
                                    setRole={props.setRole}
                                    countries={props.countries}
                                    setCountries={props.setCountries}
                                    country={props.country}
                                    setCountry={props.setCountry}
                                    levels={props.levels}
                                    setLevels={props.setLevels}
                                    level={props.level}
                                    setLevel={props.setLevel}
                                    setEmpoyeeId={setEmpoyeeId}
                                    employeeId={employeeId}
                                    employeesData={props.employeesData}
                                    setFullInfo={setFullInfo}
                                    setDetails={setDetails}
                                    setEditModal={setEditModal}

                                    editId={editId}
                                    setEditId={setEditId}
                                    employeeName={employeeName}
                                    setEmployeeName={setEmployeeName}
                                    dateJoined={dateJoined}
                                    setDateJoined={setDateJoined}
                                    editRole={editRole}
                                    setEditRole={setEditRole}
                                    editLevel={editLevel}
                                    setEditLevel={setEditLevel}
                                    editCountry={editCountry}
                                    setEditCountry={setEditCountry}
                                    email={email}
                                    setEmail={setEmail}
                                    address={address}
                                    setAddress={setAddress}
                                    department={department}
                                    setDepartment={setDepartment}
                                />
                            </div>
                        ) : data.name.toLowerCase().includes(props.searchTerm) ? (
                            <div key={idx}>
                                <MobileRecordsContents
                                    idx={idx}
                                    data={data}
                                    id={data.id}
                                    isEmployeesDetails={props.isEmployeesDetails}
                                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                                    isModifyEmployees={props.isModifyEmployees}
                                    setIsModifyEmployees={props.setIsModifyEmployees}
                                    isEmployees={props.isEmployees}
                                    setIsEmployees={props.setIsEmployees}
                                    isEditEmployees={props.isEditEmployees}
                                    setIsEditEmployees={props.setIsEditEmployees}
                                    filterMethod={props.filterMethod}
                                    searchTerm={props.searchTerm}
                                    moderatedJoinedDates={props.moderatedJoinedDates}
                                    joinedDate={props.joinedDate}
                                    setJoinedDate={props.setJoinedDate}
                                    roles={props.roles}
                                    setRoles={props.setRoles}
                                    role={props.role}
                                    setRole={props.setRole}
                                    countries={props.countries}
                                    setCountries={props.setCountries}
                                    country={props.country}
                                    setCountry={props.setCountry}
                                    levels={props.levels}
                                    setLevels={props.setLevels}
                                    level={props.level}
                                    setLevel={props.setLevel}
                                    setEmpoyeeId={setEmpoyeeId}
                                    employeeId={employeeId}
                                    employeesData={props.employeesData}
                                    setFullInfo={setFullInfo}
                                    setDetails={setDetails}
                                    setEditModal={setEditModal}

                                    editId={editId}
                                    setEditId={setEditId}
                                    employeeName={employeeName}
                                    setEmployeeName={setEmployeeName}
                                    dateJoined={dateJoined}
                                    setDateJoined={setDateJoined}
                                    editRole={editRole}
                                    setEditRole={setEditRole}
                                    editLevel={editLevel}
                                    setEditLevel={setEditLevel}
                                    editCountry={editCountry}
                                    setEditCountry={setEditCountry}
                                    email={email}
                                    setEmail={setEmail}
                                    address={address}
                                    setAddress={setAddress}
                                    department={department}
                                    setDepartment={setDepartment}
                                />
                            </div>
                        ) : data.dateJoined.includes(props.searchTerm) ? (
                            <div key={idx}>
                                <MobileRecordsContents
                                    idx={idx}
                                    data={data}
                                    id={data.id}
                                    isEmployeesDetails={props.isEmployeesDetails}
                                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                                    isModifyEmployees={props.isModifyEmployees}
                                    setIsModifyEmployees={props.setIsModifyEmployees}
                                    isEmployees={props.isEmployees}
                                    setIsEmployees={props.setIsEmployees}
                                    isEditEmployees={props.isEditEmployees}
                                    setIsEditEmployees={props.setIsEditEmployees}
                                    filterMethod={props.filterMethod}
                                    searchTerm={props.searchTerm}
                                    moderatedJoinedDates={props.moderatedJoinedDates}
                                    joinedDate={props.joinedDate}
                                    setJoinedDate={props.setJoinedDate}
                                    roles={props.roles}
                                    setRoles={props.setRoles}
                                    role={props.role}
                                    setRole={props.setRole}
                                    countries={props.countries}
                                    setCountries={props.setCountries}
                                    country={props.country}
                                    setCountry={props.setCountry}
                                    levels={props.levels}
                                    setLevels={props.setLevels}
                                    level={props.level}
                                    setLevel={props.setLevel}
                                    setEmpoyeeId={setEmpoyeeId}
                                    employeeId={employeeId}
                                    employeesData={props.employeesData}
                                    setFullInfo={setFullInfo}
                                    setDetails={setDetails}
                                    setEditModal={setEditModal}

                                    editId={editId}
                                    setEditId={setEditId}
                                    employeeName={employeeName}
                                    setEmployeeName={setEmployeeName}
                                    dateJoined={dateJoined}
                                    setDateJoined={setDateJoined}
                                    editRole={editRole}
                                    setEditRole={setEditRole}
                                    editLevel={editLevel}
                                    setEditLevel={setEditLevel}
                                    editCountry={editCountry}
                                    setEditCountry={setEditCountry}
                                    email={email}
                                    setEmail={setEmail}
                                    address={address}
                                    setAddress={setAddress}
                                    department={department}
                                    setDepartment={setDepartment}
                                />
                            </div>
                        ) : data.role.toLowerCase().includes(props.searchTerm) ? (
                            <div key={idx}>
                                <MobileRecordsContents
                                    idx={idx}
                                    data={data}
                                    id={data.id}
                                    isEmployeesDetails={props.isEmployeesDetails}
                                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                                    isModifyEmployees={props.isModifyEmployees}
                                    setIsModifyEmployees={props.setIsModifyEmployees}
                                    isEmployees={props.isEmployees}
                                    setIsEmployees={props.setIsEmployees}
                                    isEditEmployees={props.isEditEmployees}
                                    setIsEditEmployees={props.setIsEditEmployees}
                                    filterMethod={props.filterMethod}
                                    searchTerm={props.searchTerm}
                                    moderatedJoinedDates={props.moderatedJoinedDates}
                                    joinedDate={props.joinedDate}
                                    setJoinedDate={props.setJoinedDate}
                                    roles={props.roles}
                                    setRoles={props.setRoles}
                                    role={props.role}
                                    setRole={props.setRole}
                                    countries={props.countries}
                                    setCountries={props.setCountries}
                                    country={props.country}
                                    setCountry={props.setCountry}
                                    levels={props.levels}
                                    setLevels={props.setLevels}
                                    level={props.level}
                                    setLevel={props.setLevel}
                                    setEmpoyeeId={setEmpoyeeId}
                                    employeeId={employeeId}
                                    employeesData={props.employeesData}
                                    setFullInfo={setFullInfo}
                                    setDetails={setDetails}
                                    setEditModal={setEditModal}

                                    editId={editId}
                                    setEditId={setEditId}
                                    employeeName={employeeName}
                                    setEmployeeName={setEmployeeName}
                                    dateJoined={dateJoined}
                                    setDateJoined={setDateJoined}
                                    editRole={editRole}
                                    setEditRole={setEditRole}
                                    editLevel={editLevel}
                                    setEditLevel={setEditLevel}
                                    editCountry={editCountry}
                                    setEditCountry={setEditCountry}
                                    email={email}
                                    setEmail={setEmail}
                                    address={address}
                                    setAddress={setAddress}
                                    department={department}
                                    setDepartment={setDepartment}
                                />
                            </div>
                        ) : data.level.toLowerCase().includes(props.searchTerm) ? (
                            <div key={idx}>
                                <MobileRecordsContents
                                    idx={idx}
                                    data={data}
                                    id={data.id}
                                    isEmployeesDetails={props.isEmployeesDetails}
                                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                                    isModifyEmployees={props.isModifyEmployees}
                                    setIsModifyEmployees={props.setIsModifyEmployees}
                                    isEmployees={props.isEmployees}
                                    setIsEmployees={props.setIsEmployees}
                                    isEditEmployees={props.isEditEmployees}
                                    setIsEditEmployees={props.setIsEditEmployees}
                                    filterMethod={props.filterMethod}
                                    searchTerm={props.searchTerm}
                                    moderatedJoinedDates={props.moderatedJoinedDates}
                                    joinedDate={props.joinedDate}
                                    setJoinedDate={props.setJoinedDate}
                                    roles={props.roles}
                                    setRoles={props.setRoles}
                                    role={props.role}
                                    setRole={props.setRole}
                                    countries={props.countries}
                                    setCountries={props.setCountries}
                                    country={props.country}
                                    setCountry={props.setCountry}
                                    levels={props.levels}
                                    setLevels={props.setLevels}
                                    level={props.level}
                                    setLevel={props.setLevel}
                                    setEmpoyeeId={setEmpoyeeId}
                                    employeeId={employeeId}
                                    employeesData={props.employeesData}
                                    setFullInfo={setFullInfo}
                                    setDetails={setDetails}
                                    setEditModal={setEditModal}

                                    editId={editId}
                                    setEditId={setEditId}
                                    employeeName={employeeName}
                                    setEmployeeName={setEmployeeName}
                                    dateJoined={dateJoined}
                                    setDateJoined={setDateJoined}
                                    editRole={editRole}
                                    setEditRole={setEditRole}
                                    editLevel={editLevel}
                                    setEditLevel={setEditLevel}
                                    editCountry={editCountry}
                                    setEditCountry={setEditCountry}
                                    email={email}
                                    setEmail={setEmail}
                                    address={address}
                                    setAddress={setAddress}
                                    department={department}
                                    setDepartment={setDepartment}
                                />
                            </div>
                        ) : (
                            <></>
                        )
                    )
            ) : props.level ? (
                props.employeesData.filter((data) => data.level === props.level)
                    .slice(0, 10)
                    .map((data, idx) => (
                        <div key={idx}>
                            <MobileRecordsContents
                                idx={idx}
                                data={data}
                                id={data.id}
                                isEmployeesDetails={props.isEmployeesDetails}
                                setIsEmployeeDetails={props.setIsEmployeeDetails}
                                isModifyEmployees={props.isModifyEmployees}
                                setIsModifyEmployees={props.setIsModifyEmployees}
                                isEmployees={props.isEmployees}
                                setIsEmployees={props.setIsEmployees}
                                isEditEmployees={props.isEditEmployees}
                                setIsEditEmployees={props.setIsEditEmployees}
                                filterMethod={props.filterMethod}
                                searchTerm={props.searchTerm}
                                moderatedJoinedDates={props.moderatedJoinedDates}
                                joinedDate={props.joinedDate}
                                setJoinedDate={props.setJoinedDate}
                                roles={props.roles}
                                setRoles={props.setRoles}
                                role={props.role}
                                setRole={props.setRole}
                                countries={props.countries}
                                setCountries={props.setCountries}
                                country={props.country}
                                setCountry={props.setCountry}
                                levels={props.levels}
                                setLevels={props.setLevels}
                                level={props.level}
                                setLevel={props.setLevel}
                                setEmpoyeeId={setEmpoyeeId}
                                employeeId={employeeId}
                                employeesData={props.employeesData}
                                setFullInfo={setFullInfo}
                                setDetails={setDetails}
                                setEditModal={setEditModal}

                                editId={editId}
                                setEditId={setEditId}
                                employeeName={employeeName}
                                setEmployeeName={setEmployeeName}
                                dateJoined={dateJoined}
                                setDateJoined={setDateJoined}
                                editRole={editRole}
                                setEditRole={setEditRole}
                                editLevel={editLevel}
                                setEditLevel={setEditLevel}
                                editCountry={editCountry}
                                setEditCountry={setEditCountry}
                                email={email}
                                setEmail={setEmail}
                                address={address}
                                setAddress={setAddress}
                                department={department}
                                setDepartment={setDepartment}
                            />
                        </div>
                    ))) : props.country ? (
                        props.employeesData.filter((data) => data.country === props.country)
                            .slice(0, 10)
                            .map((data, idx) => (
                                <div key={idx}>
                                    <MobileRecordsContents
                                        idx={idx}
                                        data={data}
                                        id={data.id}
                                        isEmployeesDetails={props.isEmployeesDetails}
                                        setIsEmployeeDetails={props.setIsEmployeeDetails}
                                        isModifyEmployees={props.isModifyEmployees}
                                        setIsModifyEmployees={props.setIsModifyEmployees}
                                        isEmployees={props.isEmployees}
                                        setIsEmployees={props.setIsEmployees}
                                        isEditEmployees={props.isEditEmployees}
                                        setIsEditEmployees={props.setIsEditEmployees}
                                        filterMethod={props.filterMethod}
                                        searchTerm={props.searchTerm}
                                        moderatedJoinedDates={props.moderatedJoinedDates}
                                        joinedDate={props.joinedDate}
                                        setJoinedDate={props.setJoinedDate}
                                        roles={props.roles}
                                        setRoles={props.setRoles}
                                        role={props.role}
                                        setRole={props.setRole}
                                        countries={props.countries}
                                        setCountries={props.setCountries}
                                        country={props.country}
                                        setCountry={props.setCountry}
                                        levels={props.levels}
                                        setLevels={props.setLevels}
                                        level={props.level}
                                        setLevel={props.setLevel}
                                        setEmpoyeeId={setEmpoyeeId}
                                        employeeId={employeeId}
                                        employeesData={props.employeesData}
                                        setFullInfo={setFullInfo}
                                        setDetails={setDetails}
                                        setEditModal={setEditModal}

                                        editId={editId}
                                        setEditId={setEditId}
                                        employeeName={employeeName}
                                        setEmployeeName={setEmployeeName}
                                        dateJoined={dateJoined}
                                        setDateJoined={setDateJoined}
                                        editRole={editRole}
                                        setEditRole={setEditRole}
                                        editLevel={editLevel}
                                        setEditLevel={setEditLevel}
                                        editCountry={editCountry}
                                        setEditCountry={setEditCountry}
                                        email={email}
                                        setEmail={setEmail}
                                        address={address}
                                        setAddress={setAddress}
                                        department={department}
                                        setDepartment={setDepartment}
                                    />
                                </div>
                            ))) : props.role ? (
                                props.employeesData.filter((data) => data.role === props.role)
                                    .slice(0, 10)
                                    .map((data, idx) => (
                                        <div key={idx}>
                                            <MobileRecordsContents
                                                idx={idx}
                                                data={data}
                                                id={data.id}
                                                isEmployeesDetails={props.isEmployeesDetails}
                                                setIsEmployeeDetails={props.setIsEmployeeDetails}
                                                isModifyEmployees={props.isModifyEmployees}
                                                setIsModifyEmployees={props.setIsModifyEmployees}
                                                isEmployees={props.isEmployees}
                                                setIsEmployees={props.setIsEmployees}
                                                isEditEmployees={props.isEditEmployees}
                                                setIsEditEmployees={props.setIsEditEmployees}
                                                filterMethod={props.filterMethod}
                                                searchTerm={props.searchTerm}
                                                moderatedJoinedDates={props.moderatedJoinedDates}
                                                joinedDate={props.joinedDate}
                                                setJoinedDate={props.setJoinedDate}
                                                roles={props.roles}
                                                setRoles={props.setRoles}
                                                role={props.role}
                                                setRole={props.setRole}
                                                countries={props.countries}
                                                setCountries={props.setCountries}
                                                country={props.country}
                                                setCountry={props.setCountry}
                                                levels={props.levels}
                                                setLevels={props.setLevels}
                                                level={props.level}
                                                setLevel={props.setLevel}
                                                setEmpoyeeId={setEmpoyeeId}
                                                employeeId={employeeId}
                                                employeesData={props.employeesData}
                                                setFullInfo={setFullInfo}
                                                setDetails={setDetails}
                                                setEditModal={setEditModal}

                                                editId={editId}
                                                setEditId={setEditId}
                                                employeeName={employeeName}
                                                setEmployeeName={setEmployeeName}
                                                dateJoined={dateJoined}
                                                setDateJoined={setDateJoined}
                                                editRole={editRole}
                                                setEditRole={setEditRole}
                                                editLevel={editLevel}
                                                setEditLevel={setEditLevel}
                                                editCountry={editCountry}
                                                setEditCountry={setEditCountry}
                                                email={email}
                                                setEmail={setEmail}
                                                address={address}
                                                setAddress={setAddress}
                                                department={department}
                                                setDepartment={setDepartment}
                                            />
                                        </div>
                                    ))) : props.joinedDate ? (
                                        props.employeesData.filter((data) => data.dateJoined === props.joinedDate)
                                            .slice(0, 10)
                                            .map((data, idx) => (
                                                <div key={idx}>
                                                    <MobileRecordsContents
                                                        idx={idx}
                                                        data={data}
                                                        id={data.id}
                                                        isEmployeesDetails={props.isEmployeesDetails}
                                                        setIsEmployeeDetails={props.setIsEmployeeDetails}
                                                        isModifyEmployees={props.isModifyEmployees}
                                                        setIsModifyEmployees={props.setIsModifyEmployees}
                                                        isEmployees={props.isEmployees}
                                                        setIsEmployees={props.setIsEmployees}
                                                        isEditEmployees={props.isEditEmployees}
                                                        setIsEditEmployees={props.setIsEditEmployees}
                                                        filterMethod={props.filterMethod}
                                                        searchTerm={props.searchTerm}
                                                        moderatedJoinedDates={props.moderatedJoinedDates}
                                                        joinedDate={props.joinedDate}
                                                        setJoinedDate={props.setJoinedDate}
                                                        roles={props.roles}
                                                        setRoles={props.setRoles}
                                                        role={props.role}
                                                        setRole={props.setRole}
                                                        countries={props.countries}
                                                        setCountries={props.setCountries}
                                                        country={props.country}
                                                        setCountry={props.setCountry}
                                                        levels={props.levels}
                                                        setLevels={props.setLevels}
                                                        level={props.level}
                                                        setLevel={props.setLevel}
                                                        setEmpoyeeId={setEmpoyeeId}
                                                        employeeId={employeeId}
                                                        employeesData={props.employeesData}
                                                        setFullInfo={setFullInfo}
                                                        setDetails={setDetails}
                                                        setEditModal={setEditModal}

                                                        editId={editId}
                                                        setEditId={setEditId}
                                                        employeeName={employeeName}
                                                        setEmployeeName={setEmployeeName}
                                                        dateJoined={dateJoined}
                                                        setDateJoined={setDateJoined}
                                                        editRole={editRole}
                                                        setEditRole={setEditRole}
                                                        editLevel={editLevel}
                                                        setEditLevel={setEditLevel}
                                                        editCountry={editCountry}
                                                        setEditCountry={setEditCountry}
                                                        email={email}
                                                        setEmail={setEmail}
                                                        address={address}
                                                        setAddress={setAddress}
                                                        department={department}
                                                        setDepartment={setDepartment}
                                                    />
                                                </div>
                                            ))) :
                props.employeesData.slice(0, 10)
                    .map((data, idx) => (
                        <>
                            <div key={idx}>
                                <MobileRecordsContents
                                    idx={idx}
                                    data={data}
                                    id={data.id}
                                    isEmployeesDetails={props.isEmployeesDetails}
                                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                                    isModifyEmployees={props.isModifyEmployees}
                                    setIsModifyEmployees={props.setIsModifyEmployees}
                                    isEmployees={props.isEmployees}
                                    setIsEmployees={props.setIsEmployees}
                                    isEditEmployees={props.isEditEmployees}
                                    setIsEditEmployees={props.setIsEditEmployees}
                                    filterMethod={props.filterMethod}
                                    searchTerm={props.searchTerm}
                                    moderatedJoinedDates={props.moderatedJoinedDates}
                                    joinedDate={props.joinedDate}
                                    setJoinedDate={props.setJoinedDate}
                                    roles={props.roles}
                                    setRoles={props.setRoles}
                                    role={props.role}
                                    setRole={props.setRole}
                                    countries={props.countries}
                                    setCountries={props.setCountries}
                                    country={props.country}
                                    setCountry={props.setCountry}
                                    levels={props.levels}
                                    setLevels={props.setLevels}
                                    level={props.level}
                                    setLevel={props.setLevel}
                                    setEmpoyeeId={setEmpoyeeId}
                                    employeeId={employeeId}
                                    employeesData={props.employeesData}
                                    setFullInfo={setFullInfo}
                                    setDetails={setDetails}
                                    setEditModal={setEditModal}

                                    editId={editId}
                                    setEditId={setEditId}
                                    employeeName={employeeName}
                                    setEmployeeName={setEmployeeName}
                                    dateJoined={dateJoined}
                                    setDateJoined={setDateJoined}
                                    editRole={editRole}
                                    setEditRole={setEditRole}
                                    editLevel={editLevel}
                                    setEditLevel={setEditLevel}
                                    editCountry={editCountry}
                                    setEditCountry={setEditCountry}
                                    email={email}
                                    setEmail={setEmail}
                                    address={address}
                                    setAddress={setAddress}
                                    department={department}
                                    setDepartment={setDepartment}
                                />
                            </div>
                        </>
                    ))}
            <DetailModal
                details={details}
                setDetails={setDetails}
                title="Employee Information"
                id={fullInfo.id}
                name={fullInfo.name}
                dateJoined={fullInfo.dateJoined}
                role={fullInfo.role}
                level={fullInfo.level}
                country={fullInfo.country}
                email={fullInfo.email}
                address={fullInfo.address}
                department={fullInfo.department}
                setEditModal={setEditModal}
                setEmpoyeeId={setEmpoyeeId}
                setEditId={setEditId}
                setEmployeeName={setEmployeeName}
                setDateJoined={setDateJoined}
                setEditRole={setEditRole}
                setEditLevel={setEditLevel}
                setEditCountry={setEditCountry}
                setEmail={setEmail}
                setAddress={setAddress}
                setDepartment={setDepartment}
                employeesData={props.employeesData}
                handleSetDetails={handleSetDetails}
            />
            <EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                title={`Edit ${employeeName}'s details`}
                editId={editId}
                setEditId={setEditId}
                employeeName={employeeName}
                setEmployeeName={setEmployeeName}
                dateJoined={dateJoined}
                setDateJoined={setDateJoined}
                editRole={editRole}
                setEditRole={setEditRole}
                editLevel={editLevel}
                setEditLevel={setEditLevel}
                editCountry={editCountry}
                setEditCountry={setEditCountry}
                email={email}
                setEmail={setEmail}
                address={address}
                setAddress={setAddress}
                department={department}
                setDepartment={setDepartment}
                onChangeEmployeeId={onChangeEmployeeId}
                onChangeEmployeeName={onChangeEmployeeName}
                onChangeDateJoined={onChangeDateJoined}
                onChangeEditRole={onChangeEditRole}
                onChangeEditLevel={onChangeEditLevel}
                onChangeEditCountry={onChangeEditCountry}
                onChangeEditEmail={onChangeEditEmail}
                onChangeAddress={onChangeAddress}
                onChangeDepartment={onChangeDepartment}
                handleEdit={handleEdit}
            />
        </>
    )
}