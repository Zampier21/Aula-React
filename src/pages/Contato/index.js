import {Link} from 'react-router-dom';

export default function Contato(){
    return (
        <div>
            <h1>Página de contato</h1>
            <span>Contato (042)99989-3906</span>

            <Link to ="/">Home</Link>
            <Link to ="/sobre">Sobre</Link>
            <Link to ="/produto">Produto</Link>
        </div>
    );
}