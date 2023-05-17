import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import StoreContext from "./store/store-context";
import { useContext } from "react";

function App() {
  const { isUserLoggedIn, updateUserAuthetication } = useContext(StoreContext);
  console.log(isUserLoggedIn);

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
        <Link to="login" className="btn">
          Login
        </Link>
        <Link to="create-post" className="btn">
          Create Post
        </Link>
        <button className="btn">Sign Out</button>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
