import IconText from "./IconText.js";
import calculator from "./Assets/calculator.svg";
import siren from "./Assets/siren.svg";
import worker from "./Assets/worker.svg";

const RowB = () => {
  return (
    <div className="Row">
        <IconText text={"Security Modifications"} icon={siren}/>
        <IconText text={"On-Site Repairs"} icon={worker}/>
        <IconText text={"Metered Accounting"} icon={calculator}/>
    </div>
  )
}

export default RowB