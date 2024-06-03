import React, { useState } from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Signup from "./client/Signup";
import LoginIn from "./client/LoginIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Signup />}
          ></Route>
          <Route
            path="/login"
            element={<LoginIn setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          {isLoggedIn && (
            <Route
              path="/home"
              element={<Home setIsLoggedIn={setIsLoggedIn} />}
            />
          )}
          {isLoggedIn && <Route path="/create" element={<Add />} />}
          {isLoggedIn && <Route path="/edit" element={<Edit />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
