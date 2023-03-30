import { useEffect, useState } from "react";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
// import './App.scss'
import './App.css'
import { moderatedCountries, moderatedDates, moderatedLevels, moderatedRoles } from "./utils/utility";

export default function App(props) {
  const [isEmployeesDetails, setIsEmployeeDetails] = useState(false)
  const [isModifyEmployees, setIsModifyEmployees] = useState(false)
  const [isEmployees, setIsEmployees] = useState(false)
  const [isEditEmployees, setIsEditEmployees] = useState(false)
  const [moderatedJoinedDates, setModeratedJoinedDates] = useState([])
  const [joinedDate, setJoinedDate] = useState("")
  const [roles, setRoles] = useState([])
  const [role, setRole] = useState("")
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")
  const [levels, setLevels] = useState([])
  const [level, setLevel] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  // console.log("serach term", searchTerm)

  const filterMethod = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  useEffect(() => {
    moderatedDates(props.employeesData, setModeratedJoinedDates)
    moderatedRoles(props.employeesData, setRoles)
    moderatedCountries(props.employeesData, setCountries)
    moderatedLevels(props.employeesData, setLevels)
  }, [props.employeesData])

  return (
    <>
      <div data-testid="container" className="container">
        <div className="container__content">
          <Sidebar
            isEmployeesDetails={isEmployeesDetails}
            setIsEmployeeDetails={setIsEmployeeDetails}
            isModifyEmployees={isModifyEmployees}
            setIsModifyEmployees={setIsModifyEmployees}
            isEmployees={isEmployees}
            setIsEmployees={setIsEmployees}
            isEditEmployees={isEditEmployees}
            setIsEditEmployees={setIsEditEmployees}
            filterMethod={filterMethod}
            searchTerm={searchTerm}
          />
          <Content
            employeesData={props.employeesData}
            isEmployeesDetails={isEmployeesDetails}
            setIsEmployeeDetails={setIsEmployeeDetails}
            isModifyEmployees={isModifyEmployees}
            setIsModifyEmployees={setIsModifyEmployees}
            isEmployees={isEmployees}
            setIsEmployees={setIsEmployees}
            isEditEmployees={isEditEmployees}
            setIsEditEmployees={setIsEditEmployees}
            moderatedJoinedDates={moderatedJoinedDates}
            joinedDate={joinedDate}
            setJoinedDate={setJoinedDate}
            roles={roles}
            setRoles={setRoles}
            role={role}
            setRole={setRole}
            countries={countries}
            setCountries={setCountries}
            country={country}
            setCountry={setCountry}
            levels={levels}
            setLevels={setLevels}
            level={level}
            setLevel={setLevel}
            filterMethod={filterMethod}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </>
  )
}