import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Nosotros from './pages/Nosotros';
import Eventos from './pages/Eventos';
import API from './pages/API'
import Panaderia from "./pages/Panaderia";
import Pasteleria from './pages/Pasteleria';
import Footer from './components/Footer';
import Cabecera from './components/Cabecera';

function App() {
  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/API" element={<API />} />
        <Route path="/panaderia" element={<Panaderia />} />
        <Route path="/pasteleria" element={<Pasteleria />} />
      </Routes>
      <Footer />
    </Router>
    
  );

}

export default App