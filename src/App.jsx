import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CallDetails from './pages/CallDetails';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav">
          <Link to="/" className="nav-link">Головна</Link>
          <Link to="/catalog" className="nav-link">Каталог</Link>
          <Link to="/contact" className="nav-link">Контакти</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/call/:id" element={<CallDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;