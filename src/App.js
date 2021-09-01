import "./App.css";
import './components/pages/CommonComponents/SwiperCustom.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import TeslaS from './components/pages/TeslaS'
import TeslaX from './components/pages/TeslaX'
import TeslaY from './components/pages/TeslaY'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/pages/Login";
function App() {

  return (
    <Router>
      <div className="App">
        <Header />
       <Switch>
       <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Hero />
        </Route>
        <Route path='/TeslaS'>
          <TeslaS />
        </Route>
        <Route path='/TeslaX'>
          <TeslaX />
        </Route>
        <Route path='/TeslaY'>
          <TeslaY />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
