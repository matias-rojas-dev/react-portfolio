import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import MainScreen from './components/MainScreen'
const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path='/' component={MainScreen} />
    </Switch>
  </BrowserRouter>
)

export default App;
