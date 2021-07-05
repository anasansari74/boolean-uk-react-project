import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import MoviesPage from "./pages/MoviesPage";
import UserRatingsPage from "./pages/UserRatingsPage";

import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>
        <Route exact path="/user-ratings">
          <UserRatingsPage />
        </Route>
        <Route>
          <h1>Page NOT found!</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
