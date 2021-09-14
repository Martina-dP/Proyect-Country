import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import landingPage from './componentes/LandingPage/Landing';
import Home from './componentes/Home/Home';
import Actividades from "./componentes/Actividades/Actividades"
import Details from './componentes/Details/Details';

function App() {
  return (
    < BrowserRouter>
    <div>
      <Switch>
        <Route exact path = "/" component = {landingPage} />
        <Route exact path = "/home" component = {Home} />
        <Route exact path="/activity" component={Actividades} />
        <Route exact path = "/countries/:id" component = {Details} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
