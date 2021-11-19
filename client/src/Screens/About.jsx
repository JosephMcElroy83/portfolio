import Layout from "../Layout/Layout";
import './About.css'

export default function About() {
  return (
    <Layout>
      <div className="about-screen">
        <div className="branding">
          <img className="branding-img" src="https://cdn.pixabay.com/photo/2021/08/21/12/08/impossible-6562613_960_720.jpg" alt="branding motivation" />
          <h2 className="branding-header">Making the Impossible the Possible</h2>
          <p className="branding-text">Prior military software engineer with a background in data science. I am team oriented, strong communicator, and optimistic for solutions. Rewriting impossible to possible with engineering solutions through research and from the ground up approach to build for the unknowns.</p>
        </div>
        <div className="techstack">
          <h2 className="techstack-header">Tech Skillset</h2>
          <div className="tech-image-container">
            <img className="techstack-img" src="https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg" alt="MERN Stack" />
            <img className="techstack-img" src="https://res.cloudinary.com/practicaldev/image/fetch/s--KDz-qHd---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/j0xrwz8vsxkvc5b4nndy.png" alt="branding motivation" />
          </div>
          <div className="tech-text-container">
            <h5 className="techstack-text">HTML5</h5>
            <h5 className="techstack-text">CSS3</h5>
            <h5 className="techstack-text">JavaScript</h5>
            <h5 className="techstack-text">React</h5>
            <h5 className="techstack-text">Express</h5>
            <h5 className="techstack-text">MongoDB noSQL</h5>
            <h5 className="techstack-text">Ruby</h5>
            <h5 className="techstack-text">Ruby on Rails</h5>
            <h5 className="techstack-text">PostgreSQL</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}
