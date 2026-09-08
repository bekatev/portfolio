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
    <div className="App bg-bckg text-ink pb-16 min-h-screen overflow-x-hidden fade-in">
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
      <footer className="sm:max-w-[90vw] max-w-[96vw] mx-auto border-t-2 border-ink/20 pt-6 flex flex-wrap items-center justify-between gap-2">
        <span className="eyebrow">Beka Tevdorashvili</span>
        <span className="eyebrow">Tbilisi, Georgia</span>
      </footer>
    </div>
  );
}

export default App;
