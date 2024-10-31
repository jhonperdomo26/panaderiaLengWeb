import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecera from "./components/Cabecera";
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Panaderia from "./pages/Panaderia";
import Pasteleria from './pages/Pasteleria';
import Eventos from "./pages/Eventos";
import CFooter from './components/CFooter';
import Eventose from './pages/Eventose';

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
        <Route path="/Eventose" element={<Eventose />} />
      </Routes>
      <CFooter />
    </Router>
    
  );

}

export default App