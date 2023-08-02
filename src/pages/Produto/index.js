import {Link} from'react-router-dom';

export default function Produto(){
    return(
        <div>
            <h2>Página de detalhes de produto</h2>

            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>

        </div>

    );

}