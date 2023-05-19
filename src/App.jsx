import { useContext, useEffect } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import StoreContext from "./store/store-context";
import { useAuth } from "./hooks/useAuth";
import { usePost } from "./hooks/usePost";

function App() {
  const {  isUserLoggedIn, updateUserAuthetication, userData } =
    useContext(StoreContext);
  const { getPost } = usePost();
  const { signOutwithClick } = useAuth();

  useEffect(() => {
    getPost();
    onAuthStateChanged(auth, (user) => {      
      if (user) {
        // user is signed in
        updateUserAuthetication.userIsLoggedIn({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        updateUserAuthetication.userIsLoggedOut();
      }
    });
  }, []);

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
          <Route
            path="/create-post"
            element={<CreatePost userData={userData} />}
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
