import Layout from "../Layout/Layout";
import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.png"
import "./Contact.css"

export default function Contact() {
  return (
    <Layout>
      <div className="contact-screen">
        <div className="personal-info">
          <img className="profile-img" src="https://res.cloudinary.com/jm83/image/upload/v1649449493/its-me_tra9z3.jpg" alt="linkedin-profile-pic" />
          <h2 className="name">Joseph McElroy</h2>
        </div>
        <div className="contact-info">
          <h2 className="contact-text">Linkedin is the best way of quick contact</h2>
        </div>
        <div className="form-container">
        </div>
        <div className="clickable-icons">
          <a href="https://github.com/JosephMcElroy83" className="github">
          <img className="contact-imgs" src={githubIcon} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/joseph-mcelroy-ba73161a1/" className="linkedin">
          <img className="contact-imgs" src={linkedinIcon} alt="linkedin" />
          </a>
          
          {/* <img className="contact-imgs" src="https://img.icons8.com/ios-filled/100/000000/gmail.png" alt="email"/> */}
        </div>
      </div>
    </Layout>
  )
}
