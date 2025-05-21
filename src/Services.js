import RowA from "./RowA.js"
import RowB from "./RowB.js"
import RowTwo from "./RowTwo.js"

const Services = () => {
  return (
    <div className="Services">
        <h2>BGFF PROVIDES:</h2>
        <RowA />
        <RowB />
        <h2>SITE PROVIDES:</h2>
        <RowTwo />
    </div>
  )
}

export default Services