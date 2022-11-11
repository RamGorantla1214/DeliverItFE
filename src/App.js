import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/HomePage/Navbar/NavBar'
import Jumbotron from './components/HomePage/Jumbotron/Jumbotron'
import Cards from './components/HomePage/Cards/Cards'
// import Comingsoon from './components/HomePage/SecondJumbotron/Comingsoon';
import Footer from './components/HomePage/Footer/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Fruits from './components/CardComponents/Fruits&Vegetables/Fruits'
import Search from './components/Generic/Search'
import Location from './components/Generic/Location'
import Pickup from './components/CardComponents/Pickup&Drop/Pickup';

function App() {
  return (
    <div className="App">
      
        <Router>
        <Location/>
        <NavBar/>
        <Route path="/" exact>
          <Jumbotron/>
          <Cards/>
          {/* <Comingsoon/> */}
        </Route>
        <Route path='/fruits' exact >
          <Search content={'search..'}/>
          <Fruits/>
        </Route>
        <Route path='/pickup'>
          <Pickup/>
        </Route>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
