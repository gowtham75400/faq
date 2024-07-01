/* eslint-disable react/prop-types */
import { useState } from "react"


const AccItems = ({question,answer}) => {


    const [show,setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }
    return (
        <div className={`faq-items ${show ? "active" : ""}`}>
            <div className="faq-item-header" onClick={toggle}>
                <h2>{question}</h2>
            </div>
            <div className="faq-item-body">
                <div className="faq-item-body-content">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default AccItems