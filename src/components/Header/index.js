import {Link} from 'react-router-dom';
import './estilo.css';

export default function Header(){
    return (
        <header>
            <h2>Melhor formatura de eng de sw 2026</h2>
            <div className="">
                <Link to="/">Home</Link>
                <Link to ="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to ="/produto">Produto</Link>
            </div>
        </header>
    );
}