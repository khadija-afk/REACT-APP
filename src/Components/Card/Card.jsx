import { Link } from "react-router-dom";

const Card = ({ logement }) => {
    return (
        <Link to={"/logement/" + logement.id} className="home__list-card">
            <img src={logement.cover} alt={logement.title} />
            <div>
                <h2>{logement.title}</h2>
            </div>
        </Link>
    );
};

export default Card;