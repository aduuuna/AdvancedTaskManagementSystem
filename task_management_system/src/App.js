import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import HomePage from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import { isAuthenticated } from "./services/auth";

//Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLC2zoVqGp91_oX1t8_3WrwADnOs98t0Y",
  authDomain: "task-management-system-aa435.firebaseapp.com",
  projectId: "task-management-system-aa435",
  storageBucket: "task-management-system-aa435.appspot.com",
  messagingSenderId: "720731814395",
  appId: "1:720731814395:web:537ce72221ec8c09afb35e",
  measurementId: "G-7YJ5WH8W6C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = isAuthenticated();
    setUserAuthenticated(authStatus);

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 15000); //
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={userAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
