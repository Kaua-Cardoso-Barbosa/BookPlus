import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Cadastro from "./Pages/Cadastro.jsx";
import Login from "./Pages/Login.jsx";
import Catalago from "./Pages/Catalago.jsx";
import Detalhes from "./Pages/Detalhes.jsx";


export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/catalago" element={<Catalago/>}/>
                <Route path="/Detalhes" element={<Detalhes/>}/>
            </Routes>
        </BrowserRouter>
    )
}