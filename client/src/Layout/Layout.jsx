import Nav from "../Components/Nav";
import "./Layout.css"

export default function Layout(props) {
  return (
    <div className="screen-container">
    <div className="layout-nav">
      <Nav />
    </div>
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  )
}
