import TextBlurb from "./TextBlurb.js"
import AboutImg from "./Assets/About.png"

const About = () => {
  let message = <div>
      <p className="AboutText">In today's marketplace of rising rents, rising utility rates, and increasing labor cost, we were constantly on the lookout for ways to increase our business revenues without a large out-of-pocket expenditures. Being a California state-licensed attorney, I did extensive legal research on the amusement devices commonly known as coin pushers. We found that these machines were routinely producing an additional $1,100 per month in average revenue.</p>
      <p className="AboutText">After months of development and refinement, the Buy Gum Free Fun team created our Amusement Vending Machine (AVM) in 2010, which vends gum AND provides the chance for a user to play a coin pusher game. Over the years, BGFF has operated and expanded from LA and San Diego County to almost all of Southern California, meeting and working with over 200 laundromats, stores, and more to help increase their revenue. BGFF has also improved the machine by adding various security measures, such as a tilt alarm and optional shark cage, and better quality designs for repairs and maintenance. We are proud to serve the small business owners of Southern California, and we hope to serve you soon with a smile!</p>
    </div>

  return (
    <div className="About">
      <TextBlurb title="Who We Are" body={message}/>
      <img className="PusherPic" src={AboutImg} alt="The Buy Gum Free Fun Team"></img>
    </div>
  )
}

export default About
