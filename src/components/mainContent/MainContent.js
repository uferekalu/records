import './MainContent.css'

export default function MainContent(props) {
    // console.log("employees data", props.employeesData)
    return (
        <>
            <div className='main-content'>
                <div className='main-content__searchholder'>
                    <input
                        data-testid="filter-input"
                        className='main-content__search'
                        type="text"
                        placeholder="search"
                    />
                </div>
            </div>
        </>
    )
}