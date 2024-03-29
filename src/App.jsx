import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Logement from "./Pages/Logement/Logement";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Template from "./Partials/Template/Template";


function App() {
  return (
    // Je déclare mon BrowserRouter pour avoir un contexte de Router dans ma fonction App
    <BrowserRouter>
      {/* J'ouvre ma balise Routes afin de pouvoir définir à l'interieur toutes les routes que je souhaite créer */}
      <Routes>
        {/* On peux creer des groupes de routes avec la balise <Route></Route> */}
        <Route element={<Template />}>
          {/* Toutes les routes a l'interieur, passeront avant par <Template /> */}
          {/* J'ouvre une balise auto fermante <Route /> dans laquel je défini le chemin (l'URL) que je souhaite assigner ainsi que la page que je veux associer */}
          {/* Par exemple, ici je veux que l'url "/" (donc la page d'accueil, la racine de mon domaine) appel la page Home */}
          <Route path="/" element={<Home />} />
          <Route path="/logement/:logementId" element={<Logement />} />
          {/* http://localhost:3000/logement/asd51687dsa */}
          <Route path="/a-propos" element={<About />} />
          {/* Si la route n'a pas été définie, alors il prendra la route * qui correspond a toutes les autres routes */}
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
