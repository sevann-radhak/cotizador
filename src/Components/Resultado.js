import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;

        const mensaje = (!resultado) ? 'Completa el formulario' : `El total es: $`;
        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup
                    component="span"
                    className="resultado">
                    <CSSTransition
                        className="resultado"
                        key={resultado}
                        timeout={{ enter: 500, exit: 500 }}>
                        <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;