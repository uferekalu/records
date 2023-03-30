import { Button, Form } from "react-bootstrap";
import GeneralModal from "./Modal";

export default function EditModal(props) {
    return (
        <>
            <GeneralModal
                size="md"
                show={props.editModal}
                onClose={() => {
                    props.setEditModal(false)
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
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            ID:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.editId}
                            onChange={props.onChangeEmployeeId} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Name:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.employeeName}
                            onChange={props.onChangeEmployeeName} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Date Joined:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.dateJoined}
                            onChange={props.onChangeDateJoined} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Role:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.editRole}
                            onChange={props.onChangeEditRole} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Level:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.editLevel}
                            onChange={props.onChangeEditLevel} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Country:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.editCountry}
                            onChange={props.onChangeEditCountry} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Country:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.email}
                            onChange={props.onChangeEditEmail} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Address:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.address}
                            onChange={props.onChangeAddress} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "30px",
                        width: '95%',
                        paddingRight: "20px"
                    }}>
                        <Form.Label style={{
                            color: "black",
                            fontWeight: 600,
                            width: "40%"
                        }}>
                            Department:
                        </Form.Label>
                        <input style={{
                            border: "1px solid #E7E7E7",
                            width: "100%",
                            padding: "10px",
                            fontSize: "12px"
                        }} type="text" defaultValue={props.department}
                            onChange={props.onChangeDepartment} />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "20px",
                        paddingRight: "20px"
                    }}>
                        <Button
                            onClick={props.handleEdit}
                            style={{
                                background: "#00902F",
                                border: "1px solid #00902F",
                                padding: "7px",
                                color: "white",
                                width: '45%',
                                borderRadius: "6px",
                                cursor: 'pointer'
                            }}>Save
                        </Button>
                        <Button
                            onClick={() => props.setEditModal(false)}
                            style={{
                                background: "transparent",
                                border: "1px solid #00902F",
                                padding: "7px",
                                color: "#00902F",
                                width: '45%',
                                borderRadius: "6px",
                                cursor: 'pointer'
                            }}>Cancel
                        </Button>
                    </div>
                </div>
            </GeneralModal>
        </>
    )
}