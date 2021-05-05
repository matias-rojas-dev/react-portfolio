import './assets/styles/_settings.scss'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path='/about-me' component={AboutMe} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App;
