import AVM_one from "./Assets/AVM_One.JPG"
import AVM_two from "./Assets/AVM_Two.JPG"

const AVM = () => {
  return (
    <div className="AVM">
      <div className="Pusher">
        <div className="PusherPics">
        <img className="PusherPic" src={AVM_one} alt="Machine Pic One"></img>
          <div className="PusherTexts">
            <h1>The BGFF Amusement Vending Machine</h1>
            <p className="PusherText">The Buy Gum Free Fun Amusement Vending Machine (AVM) is a vending machine where someone can use a quarter to purchase gum. After buying the gum, the person can play an interactive game for free where they try to time where their quarter lands to push coins and other prizes off of a ledge, much like a coin pusher machine.</p>
          </div>
          <img className="PusherPic" src={AVM_two} alt="Machine Pic Two"></img>
        </div>
        <p className="PusherText"><strong>Watch this video to see it in action!</strong></p>
        <div className="PusherVidFrame">
          <iframe className="PusherVid" src="https://www.youtube.com/embed/iZ8k8fmyMHQ" title="Buy Gum Free Fun!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default AVM