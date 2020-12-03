import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Pages/Home.js"
import Portfolio from "./components/Pages/Portfolio.js"
import Contact from "./components/Pages/Contact.js"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
