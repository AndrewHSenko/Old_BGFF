const IconText = ({ text, icon }) => {
  return (
    <div className="iconText">
        <p>{text}</p>
        <div className="icon">
            <img className="icon" src={icon} alt="inventory icon"/>
        </div>
    </div>
  )
}

export default IconText