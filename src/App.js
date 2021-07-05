import React from 'react';
import Nav from './components/Nav';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import { ShopContextProvider } from './context/ShopContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/components/Home" component={Home} />
            <Route exact path="/components/About" component={About} />
            <Route exact path="/components/Shop" component={Shop} />
          </Switch>
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
