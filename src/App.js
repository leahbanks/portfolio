import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
