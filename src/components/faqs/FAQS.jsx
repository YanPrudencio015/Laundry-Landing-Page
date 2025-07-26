import React, { useEffect, useState } from "react";
import './faqs.css'
import { number } from "framer-motion";
import { coreModule } from "@reduxjs/toolkit/query";


const questions = [
    {
        isOpen:false,
        title:"Any question?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos dicta nesciunt, laudantium eaqu porro iusto ipsum. Provident mollitia omnis ex quide accusamus reiciendis, voluptatibus, tempora vita tenetur vel temporibus!"
    },
    {
        isOpen:false,
        title:"Any question?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos dicta nesciunt, laudantium eaqu porro iusto ipsum. Provident mollitia omnis ex quide accusamus reiciendis, voluptatibus, tempora vita tenetur vel temporibus!"
    },
    {
        isOpen:false,
        title:"Any question?",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos dicta nesciunt, laudantium eaqu porro iusto ipsum. Provident mollitia omnis ex quide accusamus reiciendis, voluptatibus, tempora vita tenetur vel temporibus!"
    },
]

function FAQ(props){

    // get the index and compare in the condition
    const[openIndex, setOpenIndex] = useState(null);


        function handleItem(index){
        setOpenIndex(openIndex === index ? null : index);
    }
    return(
        <section className="faqs">
            <div className="faqsTexts">
                <h1 className="faqsText">Any Questions?</h1>
            </div>
            <ul className="faqsList">
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