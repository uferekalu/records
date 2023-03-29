import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function CustomPagination(props) {
    useEffect(() => {
        function handlePagination() {
            const size = props.data.length
            const noOfPages = Math.floor(size / 10)
            const pageNumbers = []
            for (let i = 1; i <= noOfPages; i++) {
                pageNumbers.push(i)
            }
            props.setPageNumbers(pageNumbers)
            // console.log("page numbers", pageNumbers)
        }
        handlePagination()
    }, [props.data])
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: 'flex-end',
                marginTop: '20px',
                marginBottom: "10px",
                gap: '20px'
            }}>
                <Button
                    disabled={props.activePagenumber === 1}
                    style={{
                        color: "#808080",
                        fontSize: '15px',
                        cursor: "pointer",
                        background: "transparent",
                        border: 'none'
                    }}>
                    {"<"}
                </Button>
                {props.pageNumbers.map((num, idx) => (
                    <Form.Label
                        onClick={() => {
                            props.setPageNumber(num)
                            props.setActivePagenumber(idx + 1)
                        }}
                        key={idx}
                        style={props.activePagenumber === num ? {
                            color: "#7CC427",
                            fontSize: '15px',
                            cursor: "pointer"
                        } : {
                            color: "#808080",
                            fontSize: '15px',
                            cursor: "pointer"
                        }}>
                        {num}
                    </Form.Label>
                ))}
                <Button
                    disabled={props.activePagenumber === Math.floor(props.data.length / 10)}
                    style={{
                        color: "#808080",
                        fontSize: '15px',
                        cursor: "pointer",
                        background: "transparent",
                        border: 'none'
                    }}>
                    {">"}
                </Button>
            </div>
        </>
    )
}