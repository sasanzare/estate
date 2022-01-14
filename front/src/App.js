import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './blocks/header/Header.js';
import Footer from './blocks/footer/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Backtotop from "./components/backtotop/Backtotop";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Backtotop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="contact" element={<About />} />
        <Route path="articles" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
