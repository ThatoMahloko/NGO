import './App.css'
import Heading from './components/Heading';
import Navlinks from './components/Navlinks';
import Subheading from './components/Subheading';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Breastisbest } from './components/pages/Breastisbest';
import { Summary } from './components/pages/Summary';
import { Videos } from './components/pages/Videos';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Home } from './components/pages/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Navlinks />
        

        <Switch>
        <Route path="/home" component={Home} />
          <Route path="/breastisbest" component={Breastisbest} />
          <Route path="/summary" component={Summary} />
          <Route path="/videos" component={Videos} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
