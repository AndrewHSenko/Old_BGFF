import IconText from "./IconText.js";
import truck from "./Assets/truck.svg";
import wrench from "./Assets/wrench.svg";
import coin from "./Assets/coin.svg";

const RowA = () => {
  return (
    <div className="Row">
        <IconText text={"Delivery & Installation"} icon={truck}/>
        <IconText text={"Preventative Maintenance"} icon={wrench}/>
        <IconText text={"Scheduled Collections"} icon={coin}/>
        
    </div>
  )
}

export default RowA