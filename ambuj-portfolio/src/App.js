import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
