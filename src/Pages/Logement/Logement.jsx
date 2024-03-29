import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss"
import Accordion from "../../Components/Accordion/Accordion";

const Logement = () => {
    const [logement, setLogement] = useState({});
    const [index, setIndex] = useState(0);
    const [stars, setStars] = useState([
        'gray',
        'gray',
        'gray',
        'gray',
        'gray'
    ]);

    const { logementId } = useParams();
    // const params = useParams();
    // const logementId = params.logementId;

    useEffect(() => {
        fetch("https://titi.startwin.fr/logements/" + logementId)
            .then(res => res.json())
            .then(data => {
                setLogement(data)
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
                // La fonction fill permet de remplacer les elements d'un tableau par la valeur que l'on souhaite
                // en partant de la position du tableau que l'on souhaite et pour le nombre d'element que l'on souhaite
                // Donc ici, je remplace les valeurs "gray" par "orange" en partant du début du tableau
                // et pour les x prochains elements, x etant data.rating, donc la note de la location
                // Donc si j'ai 3 en note, j'aurai 3 oranges et 2 gris dans mon tableau
                // Le fill() ne fonctionne que si il y a deja des valeurs à remplacer
                // Sans valeurs, ne fill ne fonctionne pas
                setStars(stars.fill("orange", 0, data.rating));
                // Autre façon de faire, faire une boucle de 1 à 5 (ou 0 a 4)
                // Ajouter les classes orange si i est inferieur à la note de la location
                // Sinon ajouter la classe gray
                // Cela permet de partir d'un tableau vide par contre
                // for (let i = 0; i < 5; i++) {
                //     if (i < data.rating) {
                //         setStars(current => [...current, 'orange'])
                //     } else {
                //         setStars(current => [...current, 'gray'])
                //     }
                // }
            })
    }, [logementId, stars]);

    const next = () => {
        // Si quand je veux afficher l'image suivante (avec index +1)
        // mon index est superieur au nombre d'element du tableau - 1 (-1 pour la meme raison qu'au dessus)
        // alors nous avons dépassé le dernier element du tableau et donc
        // on reviens a 0, le premier element afin de faire une boucle
        if (index >= logement.pictures.length - 1) {
            setIndex(0);
        } else {
            // Sinon on passe a la slide suivante
            setIndex(index + 1);
        }
    }

    const prev = () => {
        // Si, quand je retire 1 a mon index pour afficher l'image précédente
        // le resultat est inférieur à 0 (donc le premier element de mon tableau)
        if (index <= 0) {
            // Alors je repart de la fin de mon tableau 
            // Que je récupère en prenant le nombre d'element de mon tableau (.length)
            // et en retirant 1, car on commence à compte de 0 et pas 1
            // Sinon il va mettre en index 5 par exemple, car il y a 5 elements dans mon tableau
            // Mais les elements sont 0=> 1=> 2=> 3=> 4=> (ce qui fait 5 elements)
            setIndex(logement.pictures.length - 1);
        } else {
            // Sinon, je retire simplement 1 a mon index pour afficher l'image précédente
            setIndex(index - 1);
        }
    }

    return (
        logement.pictures ?
            <div className="logement">
                {/* Pour afficher un diaporama : */}
                {/* Mettre une div, avec une balise image a l'interieur*/}
                {/* deux balises pour les fleches suivant et precedent */}
                {/* Avoir un state index qui va nous permettre de parcourir notre tableau */}
                {/* Le state index sera par defaut à 0 pour afficher la premiere image du tableau*/}
                {/* L'image a afficher sera toujours logement.pictures[index] */}
                {/* Appuyer sur la fleche suivant va incrementer l'index, et inversement pour la fleche precedent */}
                {/* Si l'index dépasse le nombre d'element du tableau, alors elle reviens a 0 */}
                {/* Si l'index est inferieur a 0, alors l'index repart de la fin du tableau */}
                {/* Vous devez utiliser .length */}
                <div className="logement__slider">
                    <img onClick={prev} src="/left.svg" alt="Fleche de gauche" className="logement__slider-left arrow" />
                    <img src={logement.pictures[index]} alt="Images" className="logement__slider-image" />
                    <img onClick={next} src="/right.svg" alt="Fleche de droite" className="logement__slider-right arrow" />
                </div>
                <div className="logement__infos">
                    <div className="logement__infos-left">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <div className="logement__infos-left--tag">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="logement__infos-right">
                        <div className="logement__infos-right--host">
                            <h3>{logement.host.name}</h3>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <div className="logement__infos-right--stars">
                            {stars.map((isOrange, index) => (
                                <svg key={index} className={"star " + isOrange} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="logement__accordions">
                    <Accordion title="Description" content={logement.description} />
                    <Accordion title="Equipements" content={logement.equipments} />
                </div>
            </div>
            : <></>
    );
};

export default Logement;