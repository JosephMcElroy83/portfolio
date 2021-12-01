import Layout from "../Layout/Layout";
import linkedinIcon from "../assets/linkedin.svg"
import githubIcon from "../assets/github.png"
import "./Contact.css"

export default function Contact() {
  return (
    <Layout>
      <div className="contact-screen">
        <div className="contact-info">
          <h2>Info Info Info</h2>
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
          
          <img className="contact-imgs" src="https://img.icons8.com/ios-filled/100/000000/gmail.png" alt="email"/>
        </div>
      </div>
    </Layout>
  )
}
