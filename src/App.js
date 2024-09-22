import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersFlights } from "./redux/features/thunk/fetchUsersFlights";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchUsersFlights());
    }, 2000);
  }, [])
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
