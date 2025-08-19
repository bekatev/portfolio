import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App bg-bckg text-primary pb-20 min-h-screen">
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
