import Detail from '../detail/Detail'
import './EmployeesDetailsComp.css'

const headings = [
    "Id",
    "Name",
    "Date Joined",
    "Role",
    "Level",
    "Country",
    "Email",
    "Address",
    "Department",
    "Actions"
]

export default function EmployeesDetailsComp(props) {
    return (
        <>
            <div
                data-testid="employees-details-container"
                className="employees-details-container">
                {headings.map((heading, idx) => (
                    <>
                        <div
                            data-testid="employee-detail-heading"
                            key={heading.id}
                            style={(heading === "Role" || heading === "Level" || heading === "Email") ? {
                                width: '15%',
                                color: "black",
                                fontSize: '10px',
                                fontWeight: 600,
                                marginLeft: "30px"
                            } : heading === "Date Joined" ? {
                                width: '10.8%',
                                color: "black",
                                fontSize: '10px',
                                fontWeight: 600,
                                marginLeft: "20px"
                            } : heading === "Country" ? {
                                width: '10.8%',
                                color: "black",
                                fontSize: '10px',
                                fontWeight: 600,
                                marginLeft: "2px"
                            } : heading === "Address" ? {
                                width: '10.8%',
                                color: "black",
                                fontSize: '10px',
                                fontWeight: 600,
                                marginLeft: "-20px"
                            } : {
                                width: '10.8%',
                                color: "black",
                                fontSize: '10px',
                                fontWeight: 600,
                            }}>
                            {heading}
                        </div>
                    </>
                ))}
            </div>
            {props.searchTerm?.length > 2 ? (
                props.employeesData.slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) =>
                        data.id.toString().includes(props.searchTerm) ? (
                            <>
                                <Detail
                                    idx={idx}
                                    data={data}
                                />
                            </>
                        ) : data.name.toLowerCase().includes(props.searchTerm) ? (
                            <>
                                <Detail
                                    idx={idx}
                                    data={data}
                                />
                            </>
                        ) : data.dateJoined.includes(props.searchTerm) ? (
                            <>
                                <Detail
                                    idx={idx}
                                    data={data}
                                />
                            </>
                        ) : data.role.toLowerCase().includes(props.searchTerm) ? (
                            <>
                                <Detail
                                    idx={idx}
                                    data={data}
                                />
                            </>
                        ) : data.level.toLowerCase().includes(props.searchTerm) ? (
                            <>
                                <Detail
                                    idx={idx}
                                    data={data}
                                />
                            </>
                        ) : (
                            <></>
                        )
                    )
            ) : props.level ? (
                props.employeesData.filter((data) => data.level === props.level)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <Detail
                                idx={idx}
                                data={data}
                            />
                        </>
                    ))
            ) : props.country ? (
                props.employeesData.filter((data) => data.country === props.country)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <Detail
                                idx={idx}
                                data={data}
                            />
                        </>
                    ))
            ) : props.role ? (
                props.employeesData.filter((data) => data.role === props.role)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <Detail
                                idx={idx}
                                data={data}
                            />
                        </>
                    ))
            ) : props.joinedDate ? (
                props.employeesData.filter((data) => data.dateJoined === props.joinedDate)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <Detail
                                idx={idx}
                                data={data}
                            />
                        </>
                    ))
            ) :
                props.employeesData.slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <Detail
                                idx={idx}
                                data={data}
                            />
                        </>
                    ))}
        </>
    )
}