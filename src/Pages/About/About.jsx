import Accordion from "../../Components/Accordion/Accordion";
import "./style.scss";

const About = () => {
    return (
        <div className="about">
            <Accordion title="test" content="lorem ipsum" />
            <Accordion title="test" content="lorem ipsum" />
            <Accordion title="test" content="lorem ipsum" />
            <Accordion title="test" content="lorem ipsum" />
            <Accordion title="test" content="lorem ipsum" />
        </div>
    );
};

export default About;