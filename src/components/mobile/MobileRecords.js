import { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function MobileRecords(props) {
    const ref = useRef()
    const [menuDropdown, setMenuDropdown] = useState(false)
    const [isSearch, setIsSearch] = useState(false)

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
    return (
        <>
            <div ref={ref}>
                <div style={{
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
        </>
    )
}