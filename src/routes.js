import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Erro from './pages/Erro';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Sobre from './pages/Sobre';
import Header from './components/Header'

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" elemnt={<Home/>}/>
            <Route path="/sobre" elemnt={<Sobre/>}/>
            <Route path="/contato" elemnt={<Contato/>}/>
            <Route path="/produto" elemnt={<Produto/>}/>
            <Route path="*" elemnt={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    );
}