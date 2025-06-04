import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SidNav from './components/SidNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import DashboardScriptsLoader from './components/DashboardScriptsLoader';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <DashboardScriptsLoader />
        <Header />
        <SidNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
