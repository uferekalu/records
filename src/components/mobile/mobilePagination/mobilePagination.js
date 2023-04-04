import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function MobilePagination(props) {
    const handlePrevious = () => {
        if (parseInt(props.multipleTen) > 10) {
            props.setMultipleTen((prevState) => parseInt(prevState) - 10)
        }
    }
    const handleNext = () => {
        if (parseInt(props.multipleTen) < 100) {
            props.setMultipleTen((prevState) => parseInt(prevState) + 10)
        }
    }
    useEffect(() => {
        const multiplesOfTen = []
        for (let i = 0; i <= props.employeesData.length; i++) {
            if (i % 10 === 0) {
                multiplesOfTen.push(i)
            }
        }
        props.setMultiplesTen(multiplesOfTen)
        props.setMultipleTen(10)
    }, [props.employeesData])

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
            }}>
                <div>
                    <select style={{
                        border: "1px solid #A6A6A6",
                        borderRadius: '4px',
                        padding: "7px"
                    }}
                        onChange={(event) => props.setMultipleTen(event.target.value)}
                    >
                        {/* <option value={10}>Showing 10</option> */}
                        {props.multiplesTen.slice(1).map((no, idx) => (
                            <option key={idx} value={no}>{`showing ${no}`}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <Form.Label style={{
                        fontSize: "13px",
                        color: "black",
                        fontWeight: "500"
                    }}>
                        {`of ${props.employeesData.length} entries`}
                    </Form.Label>
                </div>
                <div style={{
                    display: "flex",
                    gap: "20px"
                }}>
                    <Button
                        disabled={parseInt(props.multipleTen) === 10}
                        onClick={handlePrevious}
                        style={{
                            background: 'transparent',
                            borderRadius: '50%',
                            height: '27px',
                            width: "27px",
                            border: "1px solid #7CC427",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                        <Form.Label style={{
                            color: "#7CC427",
                            fontSize: "16px",
                            marginTop: '3px',
                            fontWeight: '500'
                        }}>
                            {"<"}
                        </Form.Label>
                    </Button>
                    <Button
                        disabled={parseInt(props.multipleTen) === 100}
                        onClick={handleNext}
                        style={{
                            background: '#7CC427',
                            borderRadius: '50%',
                            height: '27px',
                            width: "27px",
                            border: "1px solid #7CC427",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                        <Form.Label style={{
                            color: "white",
                            fontSize: "16px",
                            marginTop: '2px',
                            fontWeight: '500'
                        }}>
                            {">"}
                        </Form.Label>
                    </Button>
                </div>
            </div>
        </>
    )
}