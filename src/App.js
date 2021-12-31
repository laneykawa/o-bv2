import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Booking from "./pages/Booking/Booking";
import Checkout from "./pages/Checkout/Checkout";
import styled from "styled-components";
import { UserContext } from "./context/UserProvider";
import firebase from "firebase/app";
import "firebase/auth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  color: whitesmoke;
`;

function App() {
  const { user, setUser, signOut } = useContext(UserContext);
  const [isSignedIn, setIsSignedIn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("user", true);
        setIsSignedIn(true);
      } else {
        localStorage.removeItem("user");
        setIsSignedIn(false);
      }
    });
  }, []);

  return (
    <Container>
      {!isSignedIn ? <Auth /> : <Booking signOut={signOut} />}
      <Router>
      <Switch>
        <Route path="/Checkout" component={Checkout} redirectTo="/Checkout"></Route>
      </Switch>
      </Router>
      {/* <span>
                    <h2>You are logged in as</h2>
                    <h1 style={{ color: "#ccc" }}>{user?.email}!</h1>
                    <button
                        onClick={signOut}
                        style={{
                            padding: "0.5rem",
                            fontWeight: "bold",
                            background: "indianred",
                            border: "none",
                            borderRadius: "100px",
                            color: "whitesmoke",
                            marginTop: 10,
                        }}
                    >
                        Sign Out
                    </button>
                </span> */}
    </Container>
  );
}

export default App;
