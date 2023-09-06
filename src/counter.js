import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div className='container'>
            <h1>Contador Redux</h1>
            <div className='contador'>   
            <p>Contagem:{props.count}</p>
            </div>
            <div className='botao'>
            <button onClick={props.incremento}>Incrementar</button>
            <button onClick={props.decremento}>Decrementar</button>
            </div>
         
        </div>
    );
};

const mapState = (state) => {
    return {
        count: state.count,
    };
};

const mapAssociate = (dispatch) => {
    return{
        incremento: () => dispatch({type: 'INCREMENTO'} ),
        decremento: () => dispatch({type: 'DECREMENTO'}),
    };
};

export default connect(mapState, mapAssociate)(Counter);