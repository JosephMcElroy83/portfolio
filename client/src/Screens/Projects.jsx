import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"

export default function Projects() {
  return (
    <Layout>
    <div>
      <Link to="/projects/osrs">OSRS Project</Link>
      <Link to="/projects/datascience">Data Science Project</Link>
      <Link to="/projects/sevenwanders">Seven Wanders Project</Link>
      <Link to="/projects/ecommerce">E-commerece Project</Link>
    </div>
    </Layout>
  )
}
