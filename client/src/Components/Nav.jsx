import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
  return (
    <div className="links-nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/projects">Projects</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/contact">Contact</Link>
    </div>
  )
}
