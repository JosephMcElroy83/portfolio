import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-screen">
        <div className="featured-project">
          <Link to="/projects/sevenwanders">
            <img src="" alt="project title: seven wanders"/>
            <h2>Seven Wanders</h2>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
