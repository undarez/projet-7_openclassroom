// import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './scss/App.scss';
import { Home, Logements, About } from './page';
import Navbar from './components/header/Navbar'
// import Body from './index'
import Error from './page/Error404'
import Footer from './page/footer'
// import Body from './components/Body/Body'




// function app = routage 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Body /> */}
      
      {/* affiche le router */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<Error/>} />
        <Route path="/a-propos" element={<About />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;

// path = chemain a charger l'orsque l'itinéraire est atteint
// render = restitue le contenue de la route sur la page html
// render={() => <h1></h1>