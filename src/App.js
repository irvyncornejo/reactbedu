import React, { Component } from 'react';
import Footer from './Footer.js';
import Elementos from './Elementos.js';
import Busqueda from './Busqueda.js';
import Header from './Header.js';
import './App.css';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.multiplicacion=this.multiplicacion.bind(this);
  //   this.div=this.div.bind(this);
  // }
  //
  // div (a,b){
  //   return a/b
  // }
  // multiplicacion(a,b){
  //   return a*b
  //   // multiplicacion = (a,b) => (a*b);
  // }
  // ES7
multiplicacion = (a,b) => (a*b);
div = (a,b) => (a/b);

resta(a,b){
  return (a-b)
}

  render() {
    const suma = (a,b) => (a+b)
    const estilos = {
      backgroundColor:'white'
    }
    return (
      <div style = {estilos}>
        <Header title= 'Aquí va el titulo'
        seccion = "Nosotros"
        secciones = {{
          seccion1: "Equipo",
          seccion2: "Ayuda",
          seccion3: "Contacto"
        }}/>
        <h1 > Hola </h1>
        <p> {suma(5,6)}</p>
        <p> {this.multiplicacion(5,6)}</p>
        <p> {this.div(5,6)}</p>
        <p> {this.resta(5,6)}</p>
        <Elementos/>
        <Busqueda/>
        <Footer/>
      </div>

    );
  }
}

export default App;
