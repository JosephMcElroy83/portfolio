import { Route, Switch } from 'react-router';
import Home from './Screens/Home';
import About from './Screens/About';
import Projects from './Screens/Projects';
import Contact from './Screens/Contact';
import ProjectOSRS from './Screens/ProjectOSRS';
import ProjectDataScience from './Screens/ProjectDataScience';
import ProjectSevenWanders from './Screens/ProjectSevenWanders';
import ProjectEcommerce from './Screens/ProjectEcommerce';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Projects/osrs" component={ProjectOSRS} />
      <Route exact path="/Projects/datascience" component={ProjectDataScience} />
      <Route exact path="/Projects/sevenwanders" component={ProjectSevenWanders} />
      <Route exact path="/Projects/ecommerce" component={ProjectEcommerce} />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Switch>
   )
}
 

export default App