import './ModifyEmployeesComp.css'

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

export default function ModifyEmployeesComp(props) {
    return (
        <>
            <div
                data-testid="modify-employees-container"
                className="modify-employees-container">
                {headings.map((heading, idx) => (
                    <>
                        <div
                            data-testid="modify-employee-heading"
                            key={idx}
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
            {props.level ? (
                props.employeesData.filter((data) => data.level === props.level)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <div
                                key={idx}
                                style={idx === 0 ? {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "10px",
                                } : {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "20px"
                                }}>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600
                                }}>
                                    {data.id}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-30px'
                                }}>
                                    {data.name}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '7px'
                                }}>
                                    {data.dateJoined}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-15px',
                                }}>
                                    {data.role.length > 20 ?
                                        data.role.slice(0, 20) + "..."
                                        : data.role}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-7px'
                                }}>
                                    {data.level}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-10px'
                                }}>
                                    {data.country}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-40px'
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-20px'
                                }}>
                                    {data.address.length > 10 ?
                                        data.address.slice(0, 10) + "..."
                                        : data.address}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-60px'
                                }}>
                                    {data.department.length > 10 ?
                                        data.department.slice(0, 10) + "..."
                                        : data.department}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    display: 'flex',
                                    gap: '10px',
                                    marginLeft: '-60px'
                                }}>
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action"
                                        style={{
                                            marginLeft: "40px",
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[0]} alt="action" />
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action1"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[2]} alt="action" />
                                </div>
                            </div>
                        </>
                    ))
            ) : props.country ? (
                props.employeesData.filter((data) => data.country === props.country)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <div
                                key={idx}
                                style={idx === 0 ? {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "10px",
                                } : {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "20px"
                                }}>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600
                                }}>
                                    {data.id}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-30px'
                                }}>
                                    {data.name}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '7px'
                                }}>
                                    {data.dateJoined}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-15px',
                                }}>
                                    {data.role.length > 20 ?
                                        data.role.slice(0, 20) + "..."
                                        : data.role}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-7px'
                                }}>
                                    {data.level}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-10px'
                                }}>
                                    {data.country}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-40px'
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-20px'
                                }}>
                                    {data.address.length > 10 ?
                                        data.address.slice(0, 10) + "..."
                                        : data.address}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-60px'
                                }}>
                                    {data.department.length > 10 ?
                                        data.department.slice(0, 10) + "..."
                                        : data.department}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    display: 'flex',
                                    gap: '10px',
                                    marginLeft: '-60px'
                                }}>
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action"
                                        style={{
                                            marginLeft: "40px",
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[0]} alt="action" />
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action1"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[2]} alt="action" />
                                </div>
                            </div>
                        </>
                    ))
            ) : props.role ? (
                props.employeesData.filter((data) => data.role === props.role)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <div
                                key={idx}
                                style={idx === 0 ? {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "10px",
                                } : {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "20px"
                                }}>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600
                                }}>
                                    {data.id}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-30px'
                                }}>
                                    {data.name}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '7px'
                                }}>
                                    {data.dateJoined}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-15px',
                                }}>
                                    {data.role.length > 20 ?
                                        data.role.slice(0, 20) + "..."
                                        : data.role}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-7px'
                                }}>
                                    {data.level}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-10px'
                                }}>
                                    {data.country}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-40px'
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-20px'
                                }}>
                                    {data.address.length > 10 ?
                                        data.address.slice(0, 10) + "..."
                                        : data.address}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-60px'
                                }}>
                                    {data.department.length > 10 ?
                                        data.department.slice(0, 10) + "..."
                                        : data.department}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    display: 'flex',
                                    gap: '10px',
                                    marginLeft: '-60px'
                                }}>
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action"
                                        style={{
                                            marginLeft: "40px",
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[0]} alt="action" />
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action1"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[2]} alt="action" />
                                </div>
                            </div>
                        </>
                    ))
            ) : props.joinedDate ? (
                props.employeesData.filter((data) => data.dateJoined === props.joinedDate)
                    .slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <div
                                key={idx}
                                style={idx === 0 ? {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "10px",
                                } : {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "20px"
                                }}>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600
                                }}>
                                    {data.id}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-30px'
                                }}>
                                    {data.name}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '7px'
                                }}>
                                    {data.dateJoined}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-15px',
                                }}>
                                    {data.role.length > 20 ?
                                        data.role.slice(0, 20) + "..."
                                        : data.role}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-7px'
                                }}>
                                    {data.level}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-10px'
                                }}>
                                    {data.country}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-40px'
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-20px'
                                }}>
                                    {data.address.length > 10 ?
                                        data.address.slice(0, 10) + "..."
                                        : data.address}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-60px'
                                }}>
                                    {data.department.length > 10 ?
                                        data.department.slice(0, 10) + "..."
                                        : data.department}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    display: 'flex',
                                    gap: '10px',
                                    marginLeft: '-60px'
                                }}>
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action"
                                        style={{
                                            marginLeft: "40px",
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[0]} alt="action" />
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action1"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[2]} alt="action" />
                                </div>
                            </div>
                        </>
                    ))
            ) :
                props.employeesData.slice((parseInt(props.pageNumber) * 10) - 10, parseInt(props.pageNumber) * 10)
                    .map((data, idx) => (
                        <>
                            <div
                                key={idx}
                                style={idx === 0 ? {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "10px",
                                } : {
                                    display: "flex",
                                    justifyContent: 'flex-start',
                                    width: '100%',
                                    marginTop: "20px"
                                }}>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600
                                }}>
                                    {data.id}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-30px'
                                }}>
                                    {data.name}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '7px'
                                }}>
                                    {data.dateJoined}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-15px',
                                }}>
                                    {data.role.length > 20 ?
                                        data.role.slice(0, 20) + "..."
                                        : data.role}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-7px'
                                }}>
                                    {data.level}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-10px'
                                }}>
                                    {data.country}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-40px'
                                }}>
                                    {data.email}
                                </div>
                                <div style={{
                                    width: '15%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-20px'
                                }}>
                                    {data.address.length > 10 ?
                                        data.address.slice(0, 10) + "..."
                                        : data.address}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    fontSize: '10px',
                                    color: "black",
                                    fontWeight: 600,
                                    marginLeft: '-60px'
                                }}>
                                    {data.department.length > 10 ?
                                        data.department.slice(0, 10) + "..."
                                        : data.department}
                                </div>
                                <div style={{
                                    width: '10.8%',
                                    display: 'flex',
                                    gap: '10px',
                                    marginLeft: '-60px'
                                }}>
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action"
                                        style={{
                                            marginLeft: "40px",
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[0]} alt="action" />
                                    <img
                                        // eslint-disable-next-line jsx-a11y/aria-role
                                        role="action1"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        src={process.env.PUBLIC_URL + data.actions[2]} alt="action" />
                                </div>
                            </div>
                        </>
                    ))}
        </>
    )
}