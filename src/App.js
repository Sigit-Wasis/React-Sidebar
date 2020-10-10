import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SuratPindah from './pages/SuratPindah';
import SIUM from './pages/SIUM';
import SIPJ from './pages/SIPJ';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/surat-pindah' component={SuratPindah} />
          <Route path='/sium' component={SIUM} />
          <Route path='/sipj' component={SIPJ} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
