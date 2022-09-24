import "./sass/App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Hero />
        <About />
        <span style={{ marginLeft: "1rem" }}>Still in construction ~</span>
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
