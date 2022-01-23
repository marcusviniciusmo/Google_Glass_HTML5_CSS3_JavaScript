import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Especificacoes from 'views/Especificacoes';
import Fotos from 'views/Fotos';
import Multimidia from 'views/Multimidia';
import FaleConosco from 'views/FaleConosco';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especificacoes" element={<Especificacoes />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/multimidia" element={<Multimidia />} />
        <Route path="/faleConosco" element={<FaleConosco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
