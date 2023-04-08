import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import CTA from "./components/CTA/CTA";

function App() {
  return (
    <div className="App">
      <CTA/>
      <Header/>
      <Nav/>
    </div>
  );
}

export default App;
