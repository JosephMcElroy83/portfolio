import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
  return (
    <div className="links-nav">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
