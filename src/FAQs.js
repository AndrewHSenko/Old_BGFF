import FAQ from './FAQ.js'
import { Link } from 'react-router-dom'

const FAQs = () => {
  return (
    <div className="FAQs">
      <h1>FAQs</h1>
      <div className="FAQBox">
        <FAQ children={<div>We serve everywhere in Southern California except for Riverside County, and we've been working hard for our partners for 14 years and counting! </div>} question={"How long has BGFF been in business? And which areas do you serve?"} />
        <FAQ children={<div>Of course! Depending on the frequency of usage and site location, we service all of our machines anywhere from twice a week to once a month. We will notify you 3 days in advance with an estimated time of service and the contact information of our mechanic. The maintenance is complimentary, and we are motivated to ensure that our machines are always operational. Any repairs that are not from general wear and tear (such as vandalization) are covered from the machine's profits.</div>} question={"Is your maintenance routine?"} />
        <FAQ children={<div>Repair costs come out of the gross monthly revenue of that machine before calculating net profits. For example, if a machine makes $1,000 in a month, and a repair costs $100, then we would deduct the $100 repair cost from the $1,000 revenue, leaving $900 to be split between you and BGFF.</div>} question={"Who pays for repairs?"} />
        <FAQ children={<div>No, it is not! You can read our legal argument <Link to="legal">here</Link>. As a California state attorney with expertise on the legality of amusement devices in the state of California, I am confident that our machines adhere to CPC Section 330 and are perfectly legal.</div>} question={"Is this considered gambling?"}/>
        <FAQ children={<div>Our years of experience, 50-50 profit sharing, and complimentary maintenance put us ahead of any company that sells coin pushers. Since we specialize in these machines, we have all the parts, time, and knowledge necessary to maintain, repair, and safely make collections, so all you have to do is make sure it's plugged in! Also, other companies are more at jeopardy of legal repercussions because their machines would not qualify as vending machines.</div>} question={"What makes Buy Gum Free Fun different from other coin pusher machine companies?"}/>
      </div>
    </div>
    )
  };

export default FAQs