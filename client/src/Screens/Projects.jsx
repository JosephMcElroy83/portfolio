import Layout from "../Layout/Layout"

export default function Projects() {
  return (
    <Layout>
      <div className="project-listing">
        <div className="project-card">
            <img className="card-image" src="https://res.cloudinary.com/jm83/image/upload/v1637022877/Screen_Shot_2021-11-15_at_7.34.24_PM_zljzds.png" alt="osrs project" />
            <h2 className="title-text">Vanilla HTML, CSS, JavaScript Project</h2>
            <p><a className="deployed-links" href="https://josephmcelroy83.github.io/OSRS-Equipment-viewer/" target="_blank" rel="noreferer noreferrer" >Deployed Link</a></p>
        </div>
        <div className="project-card">
            <img className="card-image" src="https://res.cloudinary.com/jm83/image/upload/v1637023012/Screen_Shot_2021-11-15_at_7.36.35_PM_trlika.png" alt="Data Science project" />
            <h2 className="title-text">Data Manipulation & Interpretation Project</h2>
          <p><a className="deployed-links" href="https://josephmcelroy-data-science-learning-app.netlify.app/" target="_blank" rel="noreferrer" >Deployed Link</a></p>
        </div>
        <div className="project-card">
            <img className="card-image" src="https://res.cloudinary.com/jm83/image/upload/v1637022473/Screen_Shot_2021-11-14_at_10.43.48_PM_vydvp5.png" alt="Seven Wanders project" />
            <h2 className="title">Travel Blog App Project</h2>
          <p><a className="deployed-links" href="https://sevenwanders.netlify.app/" target="_blank" rel="noreferrer" >Deployed Link</a></p>
        </div>
        <div className="project-card">
            <img className="card-image" src="https://res.cloudinary.com/jm83/image/upload/v1637023179/Screen_Shot_2021-11-15_at_7.38.39_PM_cyec6i.png" alt="e-commerce project" />
            <h2 className="title">E-Commerce Project</h2>
          <p><a className="deployed-links" href="https://opti-market.netlify.app" target="_blank" rel="noreferrer" >Deployed Link</a></p>
        </div>
    </div>
    </Layout>
  )
}
