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

        <Busqueda/>
        
      </div>

    );
  }
}

export default App;
