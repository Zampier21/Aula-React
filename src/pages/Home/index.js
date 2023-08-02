import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <h1>Bem-Vindo(a) a página HOME</h1>
            <span>Giovane</span>
            <br/>
            <br/>
            <Link to ="/sobre">Sobre</Link>
            <Link to ="/contato">Contato</Link>
            <Link to ="/produto">Produto</Link>
        </div>
    );
}