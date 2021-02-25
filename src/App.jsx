import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BasketPage from "./components/pages/BasketPage";
import GamePage from "./components/pages/GamePage";
import HomePage from "./components/pages/HomePage";

import "./global.css";

const App = () => {
  const [inPurchase, setInPurchase] = useState(false);
  const [showBasketGame, setShowBasketGame] = useState(false);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Redirect from="/" to="/api/products" exact />
          <Route
            path="/api/products"
            exact
            render={() => (
              <HomePage
                inPurchase={inPurchase}
                setInPurchase={setInPurchase}
                setShowBasketGame={setShowBasketGame}
              />
            )}
          />
          <Route
            path="/api/purchase"
            exact
            render={() => (
              <BasketPage
                inPurchase={inPurchase}
                setInPurchase={setInPurchase}
                setShowBasketGame={setShowBasketGame}
              />
            )}
          />
          <Route
            path="/api/products/:id"
            render={({ match, history, params }) => {
              const { id } = match.params;
              return (
                <GamePage
                  id={id}
                  inPurchase={inPurchase}
                  setInPurchase={setInPurchase}
                  showBasketGame={showBasketGame}
                  setShowBasketGame={setShowBasketGame}
                />
              );
            }}
          />
          <Route path="*">
            <span className="align-content-center">404 Page not found</span>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
