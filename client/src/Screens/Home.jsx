import Layout from "../Layout/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="home-screen">
        <a className="deployed-links" href="https://sevenwanders.netlify.app/" target="_blank" rel="noreferrer" >
          <div className="featured-project">
            <img className="seven-wanders-img" src="https://res.cloudinary.com/jm83/image/upload/v1637022473/Screen_Shot_2021-11-14_at_10.43.48_PM_vydvp5.png" alt="project title: seven wanders"/>
            <h2 className="featured-text">Featured: <br />Seven Wanders</h2>
            <p>Deployed Link</p>
          </div>
        </a>
      </div>
    </Layout>
  )
}
