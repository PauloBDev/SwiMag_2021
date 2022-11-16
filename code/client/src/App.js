import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Footer from "./footer/Footer";
import Login, {ProtectedRoute} from "./login/Login";
import Register from "./Register";
import Search from "./Search";
import addArticle from "./addArticle";
import './App.css';

import logo from './images/Logo.png'
import loupe from './images/Loupe_noir.png'
import menu from './images/menu.png'
import cross from './images/cross.png'
import co from './images/co.png'

function App() {
  return (
      <>

<header class="header container" id="main-header">

  <div class="div_logo">
    <Link class="flex_logo" to="/"> <img class="img_logo" src={logo} alt="Logo" /> <span class="nom_logo">SwiMag</span></Link>
    <Link className="nav-link" to={"/search"}> <img class="img_loupe" src={loupe} alt="Loupe" /> </Link>
  </div>
      
  <div class="header-toogle">
          <a href="#main-header" class="header-toogle-open"><img src={menu} width="30" alt="Ouvrir Menu" /></a>
          <a href="#" class="header-toogle-close"><img src={cross} width="30" alt="Fermer Menu" /></a>
  </div>

  <nav class="header-menu">
      <div class="log_regi">
        <Link className="nav-link" to={"/addArticle"}>Add Articles </Link> <span>/</span>
        <Link className="nav-link" to={"/login"}>Login </Link> <span>/</span>
        <Link className="nav-link" to={"/register"}>Register</Link> <img src={co} alt="" />
      </div>

        <span class="haut_titre_cat">Categories : </span>
        <Link class="haut_gras" to="/articles">News</Link>
          <span class="haut_trait"></span>

        <Link class="haut_gras" to="/">How to swim ?</Link>
        <Link class="haut_cat" to="/">discover our tips for better swimming</Link>
          <span class="haut_trait"></span>

        <Link class="haut_gras" to="/">Comptetitions</Link>
        <Link class="haut_cat" to="/">World records</Link>
        <Link class="haut_cat" to="/">Athlets</Link>
          <span class="haut_trait"></span>

        <Link class="haut_gras" to="/">Awards</Link>
        <Link class="haut_cat" to="/">Best men swimming</Link>
        <Link class="haut_cat" to="/">Best women swimming</Link>
  </nav>

</header>

        <Routes>
          <Route exact={true} path="/" element={<Home/>}/>
          <Route exact={true} path="/articles" element={<Articles/>}/>
          <Route exact={true} path="/login" element={<Login/>}/>
          <Route exact={true} path="/register" element={<Register/>}/>
          <Route exact={true} path="/search" element={<Search/>}/>
          <Route path="*" element={() => <p>Page Not Found</p>} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;