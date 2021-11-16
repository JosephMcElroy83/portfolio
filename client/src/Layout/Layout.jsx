import Nav from "../Components/Nav";
import RenderParticlesBackground from "../Components/RenderParticlesBackground";
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
        <RenderParticlesBackground />
    </div>
  )
}
