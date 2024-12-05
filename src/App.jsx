import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/about.tsx';
import Portfolio from './pages/Portfolio';
import Contact from './pages/contact.tsx';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
