import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutMe from './Layout/AboutMe';
import Absensi from './Layout/Absensi';
import Apps from './Layout/Apps';
import Inforekan from './Layout/Inforekan';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Switch>
            <Route exact={true} path="/" >
              <Home />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route path="/inforekan" >
              <Inforekan />
            </Route>
            <Route path="/modules">
              <Apps />
            </Route>
            <Route path="/absensi">
              <Absensi />
            </Route>
            <Route path="/me">
              <AboutMe />
            </Route>
        </Switch>

    </div>
      </BrowserRouter>
  );
}

export default App;
