import { useState, useEffect } from "react"
import propTypes from'prop-types';
import "../App.css"
 
 const FAQItem = ({faq, index}) => {
    const {question, answer} = faq;
    const[isShow, setIsShow] = useState(false);

    useEffect(() => {
        if(index==0) setIsShow(true);
    }, [index]);
    
    const handleClick = () => {
        setIsShow((isShow) => !isShow);
    }

   return (
     <div>
        <div onClick={handleClick} className="ques">
            <button className={isShow ? "arrow" : ""}>▶</button>
            <h3>{question}</h3>
        </div>
        {
            isShow && <div>{answer}</div>  // show answer when clicked on question
        }
     </div>
   )
 }
 
 FAQItem.propTypes = {
    faq: propTypes.object.isRequired,
    index: propTypes.number.isRequired,
};

 export default FAQItem