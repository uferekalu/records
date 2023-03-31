import { Button, Form } from "react-bootstrap";
import GeneralModal from "./Modal";

export default function DetailModal(props) {
    const handleEmployeeId = () => {
        props.setEmpoyeeId(props.id)
    }

    function handleData(id) {
        const data = props.employeesData.filter((data) => data.id === id)[0]
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
        <>
            <GeneralModal
                size="md"
                show={props.details}
                onClose={() => {
                    props.setDetails(false)
                }}
                style={{
                    marginTop: "6%",
                    marginLeft: "5%"
                }}
                title={props.title}
            >
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    padding: '10px',
                    gap: '20px',
                    width: "100%"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            ID:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.id}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Name:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.name}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Date Joined:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.dateJoined}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Role:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.role}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Level:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.level}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Country:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.country}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Email:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.email}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Address:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.address}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '100%'
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "30%"
                        }}>
                            Department:
                        </Form.Label>
                        <Form.Label style={{
                            color: "black"
                        }}>
                            {props.department}
                        </Form.Label>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px",
                        paddingRight: "20px"
                    }}>
                        <Button
                            onClick={() => props.setDetails(false)}
                            style={{
                                background: "#00902F",
                                border: "none",
                                padding: "7px",
                                color: "white",
                                width: '45%',
                                borderRadius: "6px",
                                cursor: 'pointer'
                            }}>Ok
                        </Button>
                        <Button
                            onClick={() => {
                                props.setEditModal(true)
                                props.handleSetDetails()
                                handleData(props.id)
                                handleEmployeeId()
                            }}
                            style={{
                                background: "transparent",
                                border: "1px solid #00902F",
                                padding: "7px",
                                color: "#00902F",
                                width: '45%',
                                borderRadius: "6px",
                                cursor: 'pointer'
                            }}>Edit
                        </Button>
                    </div>
                </div>
            </GeneralModal>
        </>
    )
}