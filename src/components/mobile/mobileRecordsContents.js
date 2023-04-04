import { useState } from "react"
import { Form } from "react-bootstrap"

export default function MobileRecordsContents(props) {
    const [index, setIndex] = useState()

    const handleSetId = () => {
        props.setEmpoyeeId(props.id)
    }

    const handleEmployeeId = () => {
        props.setEmpoyeeId(props.id)
    }

    const handleFullInfo = () => {
        const filteredData = props.employeesData.filter((data) => data.id === props.employeeId)[0]
        props.setFullInfo((prevState) => {
            return {
                ...prevState,
                id: filteredData?.id,
                name: filteredData?.name,
                dateJoined: filteredData?.dateJoined,
                role: filteredData?.role,
                level: filteredData?.level,
                country: filteredData?.country,
                email: filteredData?.email,
                address: filteredData?.address,
                department: filteredData?.department
            }
        })
    }
    function handleData(id) {
        const data = props.employeesData[id]
        props.setEditId(data.id)
        props.setEmployeeName(data.name)
        props.setDateJoined(data.dateJoined)
        props.setEditRole(data.role)
        props.setEditLevel(data.level)
        props.setEditCountry(data.country)
        props.setEmail(data.email)
        props.setAddress(data.address)
        props.setDepartment(data.department)
    }

    return (
        <div
            key={props.idx} style={{
                display: 'flex',
                gap: "10px",
                width: '100%',
                padding: '20px',
                marginTop: "-10px"
            }}>
            {(props.isEmployeesDetails || props.isModifyEmployees) && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '10%'
                }}>
                    {index ? (
                        <img
                            onClick={() => setIndex((prevState) => {
                                prevState = ""
                                return prevState
                            })}
                            style={{
                                width: '24px',
                                height: '24px'
                            }}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="employee"
                            src={process.env.PUBLIC_URL + "/assets/images/up.png"} alt="up" />

                    ) : index === 0 ? (
                        <img
                            onClick={() => setIndex((prevState) => {
                                prevState = ""
                                return prevState
                            })}
                            style={{
                                width: '24px',
                                height: '24px'
                            }}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="employee"
                            src={process.env.PUBLIC_URL + "/assets/images/up.png"} alt="up" />
                    ) : (
                        <img
                            onClick={() => setIndex((prevState) => {
                                prevState = props.idx
                                return prevState
                            })}
                            style={{
                                width: '24px',
                                height: '24px'
                            }}
                            // eslint-disable-next-line jsx-a11y/aria-role
                            role="employee"
                            src={process.env.PUBLIC_URL + "/assets/images/down.png"} alt="up" />
                    )}
                </div>
            )}
            {(props.isEmployeesDetails || props.isModifyEmployees) && (
                <>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%'
                    }}>
                        {index ? (
                            <Form.Label
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    marginTop: "5px",
                                    color: "black",
                                    marginBottom: "20px",
    
                                }}>
                                Id
                            </Form.Label>

                        ) : index === 0 ? (
                            <Form.Label
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    marginTop: "5px",
                                    color: "black",
                                    marginBottom: "20px",
    
                                }}>
                                Id
                            </Form.Label>
                        ) : (
                            <Form.Label
                                onClick={() => setIndex((prevState) => {
                                    prevState = props.idx
                                    return prevState
                                })}
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    marginTop: "5px",
                                    color: "black",
                                    marginBottom: "20px",
    
                                }}>
                                Id
                            </Form.Label>
                        )}
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: 'none'
                        }}>
                            Name
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: 'block',
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: 'none'
                        }}>
                            Date Joined
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "10px",
                        } : {
                            display: 'none'
                        }}>
                            Role
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                            marginTop: "20px",
                        } : {
                            display: "none"
                        }}>
                            Level
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: 'none'
                        }}>
                            Country
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: "none"
                        }}>
                            Email
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: 'block',
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: "none"
                        }}>
                            Address
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: 'block',
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: "none"
                        }}>
                            Department
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: 'block',
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginBottom: "20px",
                        } : {
                            display: "none"
                        }}>
                            Actions
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '55%'
                    }}>
                        {index ? (
                            <Form.Label
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    marginTop: '3px'
                                }}>
                                {props.data.id}
                            </Form.Label>

                        ) : index === 0 ? (
                            <Form.Label
                                onClick={() => setIndex((prevState) => {
                                    prevState = ""
                                    return prevState
                                })}
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    marginTop: '3px'
                                }}>
                                {props.data.id}
                            </Form.Label>
                        ) : (
                            <Form.Label
                                onClick={() => setIndex((prevState) => {
                                    prevState = props.idx
                                    return prevState
                                })}
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "black",
                                    marginTop: '3px'
                                }}>
                                {props.data.id}
                            </Form.Label>
                        )}
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '23px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.name}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '24px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.dateJoined}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '20px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.role}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '27px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.level}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '20px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.country}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '20px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.email}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '20px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.address}
                        </Form.Label>
                        <Form.Label style={index === props.idx ? {
                            display: "block",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "black",
                            marginTop: '20px'
                        } : {
                            display: "none"
                        }}>
                            {props.data.department}
                        </Form.Label>
                        <div style={index === props.idx ? {
                            display: "flex",
                            gap: "10px"
                        } : {
                            display: "none"
                        }}>
                            <img
                                onClick={() => {
                                    handleSetId()
                                    props.setDetails(true)
                                    handleFullInfo()
                                }}
                                // eslint-disable-next-line jsx-a11y/aria-role
                                role="action"
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                    height: "24px",
                                    marginTop: '18px',
                                    cursor: 'pointer'
                                }}
                                src={process.env.PUBLIC_URL + props.data.actions[0]} alt="action" />
                            <img
                                onClick={() => {
                                    props.setEditModal(true)
                                    handleData(props.idx)
                                    handleEmployeeId()
                                }}
                                // eslint-disable-next-line jsx-a11y/aria-role
                                role="action1"
                                style={{
                                    width: "24px",
                                    maxWidth: "100%",
                                    height: "24px",
                                    marginTop: '18px',
                                    cursor: 'pointer'
                                }}
                                src={process.env.PUBLIC_URL + props.data.actions[1]} alt="action" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}