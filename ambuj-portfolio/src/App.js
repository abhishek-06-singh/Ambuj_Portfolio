import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Feature from "./components/feature/Feature";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
}

export default App;
