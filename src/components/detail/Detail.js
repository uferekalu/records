export default function Detail(props) {
    return (
        <>
            <div
                key={props.data.id}
                style={props.idx === 0 ? {
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
                    {props.data.id}
                </div>
                <div style={{
                    width: '10.8%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-30px'
                }}>
                    {props.data.name}
                </div>
                <div style={{
                    width: '10.8%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '7px'
                }}>
                    {props.data.dateJoined}
                </div>
                <div style={{
                    width: '15%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-15px',
                }}>
                    {props.data.role.length > 20 ?
                        props.data.role.slice(0, 20) + "..."
                        : props.data.role}
                </div>
                <div style={{
                    width: '15%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-7px'
                }}>
                    {props.data.level}
                </div>
                <div style={{
                    width: '10.8%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-10px'
                }}>
                    {props.data.country}
                </div>
                <div style={{
                    width: '15%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-40px'
                }}>
                    {props.data.email}
                </div>
                <div style={{
                    width: '15%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-20px'
                }}>
                    {props.data.address.length > 10 ?
                        props.data.address.slice(0, 10) + "..."
                        : props.data.address}
                </div>
                <div style={{
                    width: '10.8%',
                    fontSize: '10px',
                    color: "black",
                    fontWeight: 600,
                    marginLeft: '-60px'
                }}>
                    {props.data.department.length > 10 ?
                        props.data.department.slice(0, 10) + "..."
                        : props.data.department}
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
                        src={process.env.PUBLIC_URL + props.data.actions[0]} alt="action" />
                    <img
                        // eslint-disable-next-line jsx-a11y/aria-role
                        role="action1"
                        style={{
                            cursor: 'pointer'
                        }}
                        src={process.env.PUBLIC_URL + props.data.actions[1]} alt="action" />
                </div>
            </div>
        </>
    )
}