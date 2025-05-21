import bgff_flat from "./Assets/bgff_flat.png"

const Footer = () => {
    const today = new Date();
    return (
      <footer className='Footer'>
          <div className="contactBlurb">
            <div>
                <img className="fLogo" src={bgff_flat} alt="logo" />
                <h4>{today.getFullYear()}</h4>
            </div>
            <div className="contacts">
                <h3>Phone: (949) 215-7007</h3>
                <h3>Email: wcbstiger@yahoo.com</h3>
                <h3>Facebook: <a className="footerLink" href="https://www.facebook.com/Buygumfreefun/">https://www.facebook.com/Buygumfreefun/</a></h3>
            </div>
          </div>
      </footer>
    )
  }
  
  export default Footer