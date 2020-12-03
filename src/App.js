import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Pages/Home.js"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/portfolio" component={Discover} />
        <Route exact path="/resume" component={Search} />
        <Route exact path="/contact" component={Search} /> */}
      </div>
    </Router>
  );
}

export default App;
