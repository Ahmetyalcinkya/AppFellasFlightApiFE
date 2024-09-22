import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-headerBackground h-full justify-between px-20 items-center flex flex-col">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/my-flights">
          <FlightsPage />
        </Route>
        <Route exact path="/login">
        <LoginPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
