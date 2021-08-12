import './assets/styles/_settings.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import MainScreen from './components/MainScreen'
const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path='/main-screen' component={MainScreen} />
    </Switch>
  </BrowserRouter>
)

export default App;
