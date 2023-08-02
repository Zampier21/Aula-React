import {Link} from 'react-router-dom';

export default function Erro(){
    return(
        <div>
            <h2>Ops! Parece que essa página não existe!</h2>
            <span>Encontramos essas páginas aqui:</span>
            <Link to ="/">Home</Link>
            <Link to ="/sobre">Sobre</Link>
            <Link to ="/contato">Contato</Link>
            <Link to ="/produto">Produto</Link>

        </div>


    );

}