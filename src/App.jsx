import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <nav className="navbar">
        <button className="btn">Home</button>
        <button className="btn">Login</button>
      </nav>
      <HomePage />
   
    </div>
  );
}

export default App;
