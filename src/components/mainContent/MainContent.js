import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import EmployeesDetailsComp from '../employeesDetails/EmployeesDetailsComp'
import DetailModal from '../modal/detailModal'
import EditModal from '../modal/editModal'
import ModifyEmployeesComp from '../modifyEmployees/ModifyEmployeesComp'
import CustomPagination from '../pagination/customPagination'
import './MainContent.css'

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

export default function MainContent(props) {
    const [pageNumbers, setPageNumbers] = useState([])
    const [activePagenumber, setActivePagenumber] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)
    const [editId, setEditId] = useState()
    const [employeeName, setEmployeeName] = useState("")
    const [dateJoined, setDateJoined] = useState("")
    const [editRole, setEditRole] = useState("")
    const [editLevel, setEditLevel] = useState("")
    const [editCountry, setEditCountry] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [department, setDepartment] = useState("")

    const [employeeId, setEmpoyeeId] = useState()
    const [details, setDetails] = useState(false)
    const [fullInfo, setFullInfo] = useState(initialInfoState)

    const [editModal, setEditModal] = useState(false)

    const handleSetDetails = () => {
        setDetails(false)
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
                        onChange={props.filterMethod}
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
                            {props.moderatedJoinedDates?.length > 1 ? (
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
                                undefined
                            )}
                        </select>
                        <select
                            data-testid="filterby-role"
                            className='filterbyrole'
                            onChange={(event) => props.setRole(event.target.value)}
                        >
                            <option value="">Filter by role</option>
                            {props.roles?.length > 1 ? (
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
                                undefined
                            )}

                        </select>
                        <select
                            data-testid="filterby-country"
                            className='filterbycountry'
                            onChange={(event) => props.setCountry(event.target.value)}
                        >
                            <option value="">Filter by country</option>
                            {props.countries?.length > 1 ? (
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
                                undefined
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
                            {props.levels?.map((level, idx) => (
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
                {props.isEmployeesDetails && (
                    <EmployeesDetailsComp
                        employeesData={props.employeesData}
                        pageNumber={pageNumber}
                        joinedDate={props.joinedDate}
                        role={props.role}
                        country={props.country}
                        level={props.level}
                        searchTerm={props.searchTerm}
                        employeeId={employeeId}
                        setEmpoyeeId={setEmpoyeeId}
                        details={details}
                        setDetails={setDetails}
                        fullInfo={fullInfo}
                        setFullInfo={setFullInfo}
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
                )}
                {props.isModifyEmployees && (
                    <ModifyEmployeesComp
                        employeesData={props.employeesData}
                        pageNumber={pageNumber}
                        joinedDate={props.joinedDate}
                        role={props.role}
                        country={props.country}
                        level={props.level}
                        searchTerm={props.searchTerm}
                        employeeId={employeeId}
                        setEmpoyeeId={setEmpoyeeId}
                        details={details}
                        setDetails={setDetails}
                        fullInfo={fullInfo}
                        setFullInfo={setFullInfo}
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
                )}
                <div className='paginagion-holder'>
                    <CustomPagination
                        data={props.employeesData}
                        setPageNumbers={setPageNumbers}
                        activePagenumber={activePagenumber}
                        pageNumbers={pageNumbers}
                        setPageNumber={setPageNumber}
                        setActivePagenumber={setActivePagenumber}
                    />
                </div>
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
            </div>
        </>
    )
}