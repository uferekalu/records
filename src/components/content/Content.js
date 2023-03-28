import Header from "../header/Header";
import MainContent from "../mainContent/MainContent";
import './Content.css'

export default function Content(props) {
    return (
        <>
            <div className="content">
                <Header />
                <MainContent />
            </div>
        </>
    )
}