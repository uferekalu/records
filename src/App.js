import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'

export default function App(props) {
  return (
    <>
      <div data-testid="container" className="container">
        <div className="container__content">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
  )
}