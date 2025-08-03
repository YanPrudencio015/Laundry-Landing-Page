import React, { useEffect, useState } from "react";
import './faqs.css'
// import { number } from "framer-motion";
// import { coreModule } from "@reduxjs/toolkit/query";


const questions = [
    {
        isOpen:false,
        title:"How long does it take to get my laundry done?",
        text:"Standard service takes 24 hours. Express same-day service is also available for an extra fee."
    },
    {
        isOpen:false,
        title:"Do you offer pickup and delivery?",
        text:"Yes! We provide free pickup and delivery in selected neighborhoods. You can schedule it online or by phone."
    },
    {
        isOpen:false,
        title:"How do I know my clothes are safe with you?",
        text:" We use secure tagging and tracking systems for each order, and our trained staff handles all items with great care."
    },
]

function FAQ(props){

    // get the index and compare in the condition
    const[openIndex, setOpenIndex] = useState(null);

        function handleItem(index){
        setOpenIndex(openIndex === index ? null : index);
        console.log('X-men:', openIndex)
    }
    return(
        // <section className="faqs">
        <section className={openIndex !== null? "faqsOpened":"faqs"}>
            <div className="faqsTexts">
                <h1 className="faqsText">Any Questions?</h1>
            </div>
            {/* <ul className="faqsList"> */}
            <ul className={openIndex !== null? "faqsListOpened": "faqsList"}>
                {questions.map((value,index)=>(
                <li key={index} className={index === openIndex ? "faqsItemOpened" : "faqsItem"}>
                    <h1 className="faqsItemTitle"  
                        onClick={()=>{handleItem(index);}}
                    >{value.title}</h1>
                    <p className={index === openIndex ? "faqsItemTextShowed" : "faqsItemText"}>
                        {value.text}
                    </p>
                </li>
                ))}
            </ul>
        </section>
    )
}


export default FAQ;