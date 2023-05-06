import {BrowserRouter as Router, Route, Routes, Link, Outlet} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Portal from './Portal.js';
import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import Sifre from './component/Sifre.js';
import Iletisim from './component/Iletisim.js';
import BasvuruGuncelle from './component/BasvuruGuncelle.js';


function App() {  
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kayit" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
        <Route path="/portal/BasvuruGuncelle" element={<BasvuruGuncelle/>} />
        <Route path="/portal/Iletisim" element={<Iletisim/>} />
        <Route path="/portal/Sifre" element={<Sifre/>} />
      </Routes>
    </Router>

  );
}

export default App;