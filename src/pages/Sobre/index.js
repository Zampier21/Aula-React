import {Link} from 'react-router-dom';

export default function Sobre(){
    return(
        <div>
            <h1>Página sobre a empresa</h1>
            <Link to ="/">Home</Link>
            <Link to ="/contato">Contato</Link>
            <Link to ="/produto">Produto</Link>
        </div>


    );

}