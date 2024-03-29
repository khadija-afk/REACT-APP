import "./style.scss";
import { useEffect, useState } from "react";
// ../ pour le dossier précédent
// J'importe le component Card depuis son emplacement dans le dossier Component/Card
import Card from "../../Components/Card/Card";

const Home = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch("https://titi.startwin.fr/logements")
            .then(res => res.json())
            .then(data => setLogements(data))
    }, [])

    return (
        <main className="home">
            <div className="home__background">
                <img src="/background.jpg" alt="background" />
                <div>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>
            <div className="home__list">
                {logements.map(logement => (
                    // J'appel mon component Card en lui passant en parametres mon objet logement sous le nom logement
                    // Je pourrais donc recuperer la variable logement dans mon compontent grace aux props
                    <Card logement={logement}></Card>
                ))}
            </div>
        </main>
    );
};

export default Home;