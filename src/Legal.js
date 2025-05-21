import AltHeader from "./AltHeader"
import { useEffect } from "react"
import me from "./Assets/me.jpeg"
import bus_license from "./Assets/business_license.png"

const Legal = () => {

  useEffect(() => {
    window.scrollTo({
      top: (0, 0)
    })
  })

  return (
    <div>
        <AltHeader />
        <div className="Legal">
          <h1>LEGAL</h1>
          <h2>About Me</h2>
          <img className="PusherPic" src={me} alt="Me" />
          <p className="PusherText">My name is Todd H. Iger and my California State Bar number is 171286. I have conducted extensive legal research in regards to the legality of various amusement devices in California. I would argue that past attempts to exclude amusement devices under being "skill-based" have been incorrectly rebuffed in the case of some coin pusher machines. To date, my attempts to have my day in court have been moot, but I would embrace my opportunity to make my legal argument.</p>
          <h2>Is this a gambling device?</h2>
          <p><strong>No.</strong> Under California Penal Code (CPC) Section 330.5, an amusement device (especially one that involves money) is not considered a gambling machine if it is either skill-based or purely transactional. BGFF does not argue that our machines are strictly skill-based (although they are!) because of its subjectivity. Instead, our machines are purely transactional, meaning you pay for something and you get it every time. This is called the "considerational" exclusion.</p>
          <h2>How does this fall under the "Consideration" exemption?</h2>
          <p>The Buy Gum Free Fun AVM is a type of <i>vending machine</i>, meaning you are directly purchasing gum from that machine. Further, the gum that the player receives matches the fair market value (FMV) of the cost to play ($0.25). Hence, the machine provides the user gum that matches the exact consideration in value and provides that gum every time the user uses the machine. The game that someone plays after the purchase is <i>strictly free</i> as a bonus, hence the name "Buy Gum Free Fun"!</p>
          <h2>Read the CPC Section here:</h2>
          <p><a href="https://codes.findlaw.com/ca/penal-code/pen-sect-330-5/">CPC Section 330.5</a>: "It is further expressly provided that Sections 330.1 to 330.4 [related to gambling devices], inclusive, of this code shall not apply to ... machines which vend cigarettes, candy, ice cream, food, confections or other merchandise, in which there is deposited an exact consideration and from which in every case the customer obtains that which he purchases..."</p>
          <h2>Our Business License:</h2>
          <img className="License" src={bus_license} alt="Business License from the City of Ontario"></img>
        </div>
    </div>
    
  )
}

export default Legal