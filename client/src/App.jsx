import { Route, Switch } from 'react-router';
import Home from './Screens/Home';
import About from './Screens/About';
import Projects from './Screens/Projects';
import Contact from './Screens/Contact';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Switch>
   )
}
 

export default App