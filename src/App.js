import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
