import './assets/styles/_settings.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import MainScreen from './components/MainScreen'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path='/home' component={MainScreen} />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>
)

export default App;
