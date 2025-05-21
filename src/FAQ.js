import { useState, useCallback} from 'react';
import FAQAnswer from './FAQAnswer';
import icon from './Assets/right_arrow.svg';

const FAQ = ({ children, question }) => {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [clickedArrow, setClickedArrow] = useState(false);
  const toggleIsExpanded = useCallback(() => {
    setIsExpanded((isExpanded) => !isExpanded);
    setClickedArrow((clickedArrow) => !clickedArrow);
  }, []);

  return (
    <div className="FAQ">
      <button className="Question" onClick={toggleIsExpanded}><img className="collapseArrow" src={icon} alt="logo"/>{question}</button>
      <FAQAnswer isExpanded={isExpanded} children={children} />
      {/*<Test isExpanded={isExpanded} children={"There is a section of the California Penal Code (we should mention the penal code) that specifically exempts amusement machines from being considered gambling devices. We have studied this provision extensively, and our coin pusher machines are developed and manufactured to comply with this exemption. Please call us at (put phone number) with any questions or comments about this exemption."} />*/}
    </div>
  );
}

export default FAQ
