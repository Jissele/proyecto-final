import Navbar from "./components/Nbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Productos from "./views/Productos";
import Dashboard from "./views/Dashboard";
import Futer from './components/Futer'

function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Futer />


    </div>
  );
}

export default App;
