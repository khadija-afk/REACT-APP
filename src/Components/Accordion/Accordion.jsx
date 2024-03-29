import { useState } from "react";
import "./style.scss";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion__top" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img className={isOpen ? 'open' : ""} src="/top.svg" alt="accordéon" />
            </div>
            <div className={"accordion__bottom " + (isOpen ? 'open' : "")}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Accordion;