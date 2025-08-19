import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Background from "./components/Background";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CursorGlow from "./components/CursorGlow";
import Highlights from "./components/Highlights";

function App() {
  return (
    <div className="App bg-bckg text-primary pb-20 min-h-screen fade-in">
      <Background />
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />
      <Main />
      <Projects />
      <Highlights />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
