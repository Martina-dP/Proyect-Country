import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import landingPage from './componentes/LandingPage/Landing';
import Home from './componentes/Home/Home';

function App() {
  return (
    < BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {landingPage} />
        <Route exact path = "/home" component = {Home} />
        {/* <Route exact path = "/countries/:id" component = {Detail} /> */}
        {/* <Route exact path = "/activity" component = {Form} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
