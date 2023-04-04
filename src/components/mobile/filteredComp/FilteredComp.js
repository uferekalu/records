import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FilteredComp(props) {
    const [filterHere, setFilterHere] = useState(false)
    const [byDateJoined, setByDateJoined] = useState(false)
    const [byRole, setByRole] = useState(false)
    const [byCountry, setByCountry] = useState(false)

    const handleMainOption = () => {
        setByDateJoined(false)
        setByRole(false)
        setByCountry(false)
        setFilterHere(true)
    }

    const handleByDateJoined = () => {
        setByDateJoined(true)
        setFilterHere(false)
    }

    const handleByRole = () => {
        setByRole(true)
        setFilterHere(false)
    }

    const handleByCountry = () => {
        setByCountry(true)
        setFilterHere(false)
    }

    useEffect(() => {
        function moderatedLevels() {
            const newData = []
            const levels = props.employeesData.map((dt) => dt.level)
            const levelsSet = new Set(levels)
            for (let i of levelsSet) {
                newData.push(i)
            }
            props.setLevels(newData)
        }
        function moderatedCountries() {
            const newData = []
            const countries = props.employeesData.map((dt) => dt.country)
            const countriesSet = new Set(countries)
            for (let i of countriesSet) {
                newData.push(i)
            }
            props.setCountries(newData)
        }
        function moderatedRoles() {
            const newData = []
            const roles = props.employeesData.map((dt) => dt.role)
            const rolesSet = new Set(roles)
            for (let i of rolesSet) {
                newData.push(i)
            }
            props.setRoles(newData)
        }
        function moderatedJoinedDates() {
            const newData = []
            const joinedDates = props.employeesData.map((dt) => dt.dateJoined)
            const joinedDatesSet = new Set(joinedDates)
            for (let i of joinedDatesSet) {
                newData.push(i)
            }
            props.setJoinedDates(newData)
        }
        moderatedLevels()
        moderatedCountries()
        moderatedRoles()
        moderatedJoinedDates()
    }, [props.employeesData])
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                gap: '8px',
                marginTop: '-20px',
                marginBottom: '30px',
                padding: "20px",
            }}>
                {byDateJoined ? (
                    <select
                        onChange={(event) => event.target.value === "Back To Main Options" ?
                            handleMainOption() : props.setByJoinedDate(event.target.value)}
                        style={{
                            border: "1px solid #A6A6A6",
                            borderRadius: '4px',
                            padding: "7px"
                        }}>
                        <option value="">By Joined Date</option>
                        {props.joinedDates.map((date, idx) => (
                            <option key={idx} value={date}>{date}</option>
                        ))}
                        <option value="Back To Main Options">
                            Back To Main Options
                        </option>
                    </select>
                ) : byRole ? (
                    <select
                        onChange={(event) => event.target.value === "Back To Main Options" ?
                            handleMainOption() : props.setByRole(event.target.value)}
                        style={{
                            border: "1px solid #A6A6A6",
                            borderRadius: '4px',
                            padding: "7px",
                            width: "150px"
                        }}>
                        <option value="">By Role</option>
                        {props.roles.map((role, idx) => (
                            <option key={idx} value={role}>{role}</option>
                        ))}
                        <option value="Back To Main Options">
                            Back To Main Options
                        </option>
                    </select>
                ) : byCountry ? (
                    <select
                        onChange={(event) => event.target.value === "Back To Main Options" ?
                            handleMainOption() : props.setByCountry(event.target.value)}
                        style={{
                            border: "1px solid #A6A6A6",
                            borderRadius: '4px',
                            padding: "7px",
                            width: "150px"
                        }}>
                        <option value="">By Country</option>
                        {props.countries.map((country, idx) => (
                            <option key={idx} value={country}>{country}</option>
                        ))}
                        <option value="Back To Main Options">
                            Back To Main Options
                        </option>
                    </select>
                ) : filterHere ? (
                    <Button
                        onClick={() => setFilterHere((prevState) => !prevState)}
                        style={{
                            display: 'flex',
                            gap: "20px",
                            background: 'transparent',
                            border: "1px solid #A6A6A6",
                            padding: '3px',
                            width: "44%",
                            height: '34px',
                        }}>
                        <img
                            style={{
                                width: "18px",
                                height: '18px',
                                maxWidth: "100%",
                                marginTop: '5px',
                                marginLeft: "6px"
                            }}
                            src={process.env.PUBLIC_URL + "/assets/images/filteradmin.png"}
                            alt="badge"
                        />
                        <Form.Label style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            color: "#151515",
                            marginTop: '3px'
                        }}>
                            Filter here
                        </Form.Label>
                    </Button>
                ) : (
                    <Button
                        onClick={() => setFilterHere((prevState) => !prevState)}
                        style={{
                            display: 'flex',
                            gap: "20px",
                            background: 'transparent',
                            border: "1px solid #A6A6A6",
                            padding: '3px',
                            width: "44%",
                            height: '34px',
                            borderRadius: "6px"
                        }}>
                        <img
                            style={{
                                width: "18px",
                                height: '18px',
                                maxWidth: "100%",
                                marginTop: '5px',
                                marginLeft: "6px"
                            }}
                            src={process.env.PUBLIC_URL + "/assets/images/filteradmin.png"}
                            alt="badge"
                        />
                        <Form.Label style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            color: "#151515",
                            marginTop: '3px'
                        }}>
                            Filter here
                        </Form.Label>
                    </Button>
                )}
                <div style={filterHere ? {
                    display: 'block',
                    position: 'absolute',
                    marginTop: "4rem",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "260px",
                    background: "white",
                    zIndex: 100
                } : {
                    display: 'none'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: "5px"
                        }}>
                            <Form.Label
                                onClick={handleByDateJoined}
                                style={{
                                    fontWeight: "400",
                                    fontSize: "13px",
                                    color: "#151515",
                                    marginTop: '3px',
                                    width: 'fit-content',
                                    background: "rgba(124, 196, 39, 0.2)",
                                    padding: '8px',
                                    cursor: "pointer",
                                    borderRadius: '4px'
                                }}>
                                By Date Joined
                            </Form.Label>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: "5px"
                        }}>
                            <Form.Label
                                onClick={handleByRole}
                                style={{
                                    fontWeight: "400",
                                    fontSize: "13px",
                                    color: "#151515",
                                    marginTop: '3px',
                                    width: 'fit-content',
                                    background: "rgba(124, 196, 39, 0.2)",
                                    padding: '8px',
                                    cursor: "pointer",
                                    borderRadius: '4px'
                                }}>
                                By Role
                            </Form.Label>
                            <Form.Label
                                onClick={handleByCountry}
                                style={{
                                    fontWeight: "400",
                                    fontSize: "13px",
                                    color: "#151515",
                                    marginTop: '3px',
                                    width: 'fit-content',
                                    background: "rgba(124, 196, 39, 0.2)",
                                    padding: '8px',
                                    cursor: "pointer",
                                    borderRadius: '4px'
                                }}>
                                By Country
                            </Form.Label>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex'
                }}>
                    <Form.Label style={{
                        color: "black",
                        fontWeight: "400",
                        fontSize: "12px",
                        marginRight: "10px",
                        marginTop: "10px",
                    }}>
                        Sort by:
                    </Form.Label>
                    <select style={{
                        border: "1px solid #A6A6A6",
                        borderRadius: '4px',
                        padding: "7px",
                        width: '100px'
                    }}
                        onChange={(event) => props.setLevel(event.target.value)}
                    >
                        <option value="">Level</option>
                        {props.levels.map((level, idx) => (
                            <option key={idx} value={level}>{level}</option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}