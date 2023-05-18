import { useContext } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import StoreContext from "./store/store-context";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isUserLoggedIn, updateUserAuthetication } = useContext(StoreContext);
  console.log(isUserLoggedIn);
  const { signOutwithClick } = useAuth();

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      // user is signed in
      updateUserAuthetication.userisLoggedIn();
    } else {
      updateUserAuthetication.userisLoggedOut();
    }
  });

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="btn">
          Home
        </Link>
        {!isUserLoggedIn && (
          <Link to="login" className="btn">
            Login
          </Link>
        )}
        {isUserLoggedIn && (
          <Link to="create-post" className="btn">
            Create Post
          </Link>
        )}
        {isUserLoggedIn && (
          <button className="btn" onClick={signOutwithClick}>
            Sign Out
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {isUserLoggedIn && (
          <Route path="/create-post" element={<CreatePost />} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
