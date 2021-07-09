import React from 'react';
import Nav from './components/Nav';
import { Footer } from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import { Item } from './views/Item';
import { Cart } from './views/Cart';
import { Checkout } from './views/Checkout';
import { ShopContextProvider } from './context/ShopContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/components/Home">
              <Home />
            </Route>
            <Route exact path="/components/About">
              <About />
            </Route>
            <Route exact path="/components/Shop">
              <Shop />
            </Route>
            <Route exact path="/components/Shop/:id">
              <Item />
            </Route>
            <Route exact path="/components/Cart">
              <Cart />
            </Route>
            <Route exact path="/components/Checkout">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
