import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecera from "./components/Cabecera";
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Panaderia from "./pages/Panaderia";
import Pasteleria from './pages/Pasteleria';
import CFooter from './components/CFooter';
import Eventos from './pages/Eventos';
import Matrimonios from './pages/Matrimonios';
import BabyShowers from './pages/BabyShowers';
import Aniversarios from './pages/Aniversarios';
import Cumpleaños from './pages/Cumpleaños';

function App() {
  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/panaderia" element={<Panaderia />} />
        <Route path="/pasteleria" element={<Pasteleria />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Matrimonios" element={<Matrimonios />} />
        <Route path="/BabyShowers" element={<BabyShowers />} />
        <Route path="/Aniversarios" element={<Aniversarios />} />
        <Route path="/Cumpleaños" element={<Cumpleaños />} />
      </Routes>
      <CFooter />
    </Router>
    
  );

}

export default App