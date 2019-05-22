import React, { Component } from 'react';
import Header from './header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      datos: ''
    }
  }

  cotizarSeguro = (datos) => {
    const { marca, plan, year } = datos;

    // Regla de negocio: Base del seguro es 2000
    let resultado = 2000;

    // Obtener diferencia de años (se resta 3% por cada año)
    const diferencia = obtenerDiferenciaAnio(year);

    // Restar diferencia por años
    resultado -= ((diferencia * 3) * resultado) / 100;

    // Aumentar precio según marca (americano +15%, europeo +30% y asiatico +5%)
    resultado = calcularMarca(marca) * resultado;

    // Incrementar valor según plan (básico +20%, completo: +50%)
    resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);

    // Crear objetos para el resumen
    const datosAuto = {
      marca,
      plan,
      year
    }

    // Actualizamos el estado
    this.setState({
      resultado,
      datos: datosAuto
    })

    console.log(`El resultado parcial es ${resultado}`);
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo='Cotizador de Seguros para Autos'
        />

        <div className='contenedor-formulario'>
          <Formulario
            cotizarSeguro={this.cotizarSeguro} />
          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado} />
            <Resultado
                resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
