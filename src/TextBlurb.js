const TextBlurb = ({ title, body }) => {
  return (
    <div className="textBlurb">
        <h1>{title}</h1>
        {body}
    </div>
    
  )
}

export default TextBlurb