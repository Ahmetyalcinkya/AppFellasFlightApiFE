import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FlightsPage from "./pages/FlightsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLoggedInUser } from "./redux/features/thunk/fetchLoggedInUser";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [])
  
  return (
    <div className="w-full min-h-screen bg-headerBackground h-full justify-between px-20 items-center flex flex-col">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/my-flights">
            <ProtectedPage PageComponent={FlightsPage} fromURL={"/login"} />
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
