import './Header.css'

export default function Header(props) {
    return (
        <>
            <div className="header">
                <div className='header_tittle'>
                    <h3 data-testid="recordTitle" className='title'>Employees Record</h3>
                </div>
                <div className='header__admin'>
                    <button data-testid="btnAdmin" className='btn-admin'>
                        Admin
                    </button>
                </div>
            </div>
        </>
    )
}