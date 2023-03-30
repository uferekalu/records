import Header from "../header/Header";
import MainContent from "../mainContent/MainContent";
import './Content.css'

export default function Content(props) {
    return (
        <>
            <div className="content">
                <Header />
                <MainContent
                    employeesData={props.employeesData}
                    isEmployeesDetails={props.isEmployeesDetails}
                    setIsEmployeeDetails={props.setIsEmployeeDetails}
                    isModifyEmployees={props.isModifyEmployees}
                    setIsModifyEmployees={props.setIsModifyEmployees}
                    isEmployees={props.isEmployees}
                    setIsEmployees={props.setIsEmployees}
                    isEditEmployees={props.isEditEmployees}
                    setIsEditEmployees={props.setIsEditEmployees}
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
                    filterMethod={props.filterMethod}
                    searchTerm={props.searchTerm}
                />
            </div>
        </>
    )
}