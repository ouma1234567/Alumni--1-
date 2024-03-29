import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import AboutMe from "./pages/AboutMe";
import Formulaire from "./pages/Formulaire";
import Laurat from "./pages/Laurat";
import Accueil from "./pages/Accueil";
import Signup from "./pages/Signup";
import Card from "./pages/Card";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-me":
        title = "";
        metaDescription = "";
        break;
      case "/formulaire":
        title = "";
        metaDescription = "";
        break;
      case "/laurat":
        title = "";
        metaDescription = "";
        break;
      case "/accueil":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/card":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/formulaire" element={<Formulaire />} />
      <Route path="/laurat" element={<Laurat />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}
export default App;
