import IconText from "./IconText.js";
import electricity from "./Assets/electricity.svg";
import space from "./Assets/business.svg";
import supervision from "./Assets/supervision.svg"

const RowTwo = () => {
  return (
    <div className="RowTwo">
        <IconText text={"Electricity"} icon={electricity}/>
        <IconText text={"Space"} icon={space}/>
        <IconText text={"Supervision"} icon={supervision}/>
    </div>
  )
}

export default RowTwo