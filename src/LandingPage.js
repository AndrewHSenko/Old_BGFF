import { Link } from "react-router-dom"
import { useRef, useEffect } from "react"
import About from "./About.js"
import AVM from "./AVM.js"
import Shoutout from "./Shoutout.js"
import Table from "./Table.js"
import Services from "./Services.js"
import FAQs from "./FAQs.js"
import Footer from "./Footer.js"
import gball_logo from './Assets/bgff_gball_logo.jpg'
import bgff_colorless from './Assets/bgff_colorless.png'

const LandingPage = () => {
  const Viewer = useRef([]);

  const handleScroll = (n) => {
    const header = document.getElementsByClassName("Nav")[0];
    console.log(header.getBoundingClientRect());
    const headerOffset = header.getBoundingClientRect().height;
    const origPos = Viewer.current[n]?.getBoundingClientRect().top;
    const newPos = origPos + window.scrollY - headerOffset;
    console.log(newPos, origPos, headerOffset);
    
    window.scrollTo({
      top: newPos,
      behavior: "smooth"
    });
  }
  
  useEffect(() => {
    window.scrollTo({
      top: (0, 0)
    })
  })

  return (
    <div>
      <nav className="Nav">
        <img className="hLogo" src={bgff_colorless} alt="logo"/>
        <div className="hButtons">
          <button onClick={() => {handleScroll(0)}}>Home</button>
          <button onClick={() => {handleScroll(1)}}>The BGFF Machine</button>
          <button onClick={() => {handleScroll(2)}}>Services</button>
          <button onClick={() => {handleScroll(3)}}>About BGFF</button>
          <button onClick={() => {handleScroll(4)}}>FAQs</button>
          <button onClick={() => {handleScroll(6)}}>Contact Us</button>
          <Link className="hButtonsLink" to="legal">Legal</Link>
          <Link className="pendingLink"><i>Client Portal *coming soon*</i></Link>
          <Link className="hLink" onClick={() => handleScroll(5)}>Partner with BGFF!</Link> {/** onClick={() => handleScroll(5) */}
        </div>
      </nav>
      <div ref={(ref) => {Viewer.current[0] = ref}} className="LandingImg">
        <img src={gball_logo} alt="logo"/>
        <h1 className="tagline">The innovative vending machine that can make you <br/><i className="money">$$ THOUSANDS $$</i><br/> a month <u>RISK FREE</u>!</h1>
      </div>
      <div ref={(ref) => {Viewer.current[1] = ref}}>
        <AVM />
      </div>
      <Shoutout title={"The BGFF Machine makes sites an average of more than $1000 a month!"} body={<p>If your machine does not generate at least $500 in monthly income for any three consecutive months, Buy Gum Free Fun will remove the equipment at <strong>no expense</strong> to you. Some sites make almost <i><strong className="money">$2000</strong> a month</i>!  Pocket <strong>50% of the total profits</strong> with NO out-of-pocket expenditures. Join over 200 other businesses and make some extra money with no hassle today!</p>} />
      <Table />
      <div ref={(ref) => {Viewer.current[2] = ref}}>
        <Services />
      </div>
      <div ref={(ref) => {Viewer.current[3] = ref}}>
        <About/>
      </div>
      <Shoutout title={"OUR MACHINES ARE BUILT FOR SECURITY AND CUSTOMIZED FOR LEGAL COMPLIANCE."} body={<p>Buy Gum Free Fun has added various security features to the machines, including a tilt alarm and an optional shark cage. The BGFF machine is an "amusement vending machine" which is not considered a gambling device. We have studied this exemption extensively, and our coin pusher machines are developed and manufactured to comply with this classification.  Please call us at <strong>(949) 215-7007</strong> with any questions or comments about this exemption.</p>} />
      <div ref={(ref) => {Viewer.current[4] = ref}}>
        <FAQs />
      </div>
      <div ref={(ref) => {Viewer.current[5] = ref}}>
        <Shoutout title={"Interested?"} body={<p>Contact us below!</p>} />
      </div>
      <div ref={(ref) => {Viewer.current[6] = ref}}>
        <Footer />
      </div>
    </div>
     
  )
}

export default LandingPage