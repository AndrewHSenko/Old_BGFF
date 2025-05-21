import { Link } from "react-router-dom";
import stripes_logo from "./Assets/bgff_stripes_logo.png"

const AltHeader = () => {
  return (
    <nav className="Nav">
      <img className="hLogo" src={stripes_logo} alt="logo"/>
      <div className="altButtons">
        <Link className="althLink" to="/">Home</Link>
      </div>
    </nav>
  )
}

export default AltHeader