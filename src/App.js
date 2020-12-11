import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Pages/Home.js"
import Portfolio from "./components/Pages/Portfolio.js"
import Contact from "./components/Pages/Contact.js"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> 
        <Footer />
    </Router>
  );
}

export default App;
