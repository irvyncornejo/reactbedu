import React, { Component } from 'react';
import Contacts from './contacts.json';
class Busqueda extends Component {

    state = {
      busquedas : Contacts.slice(0,9)
      // nombre: 'Irvyn'
    }

    // agregarContactoRandom = ()=> {
    //   console.log("El boton funciona");
    // }
    // cambiarEstado = () => {
    //   if()
    // }
    agregarContactoRandom = () => {
            let contactoRandom = Contacts[Math.floor(Math.random() * Contacts.length)];
            let contactosActualizados = this.state.busquedas;
            contactosActualizados.push(contactoRandom);
            this.setState({
                busquedas: contactosActualizados
            })
            console.log(contactosActualizados);
            console.log(contactoRandom);
            console.log('Botón presionado');
        }
        ordenarContactos = () => {
            let contactosOrdenados = this.state.busquedas;
            // contactosOrdenados.sort(function (a, b) {
            //  if (a.popularity > b.popularity) {
            //      return -1;
            //  }
            //  if (a.popularity < b.popularity) {
            //      return 1;
            //  }
            //  return 0;
            // });
            contactosOrdenados.sort((a,b) => (a.popularity > b.popularity) ? -1 : (a.popularity < b.popularity) ? 1 : 0)
            this.setState({
                busquedas: contactosOrdenados
            })
        }
    // contactosOdenados.sort((a,b) =>((a.popularity > b.popularity) ? -1 : (a.popularity < b.popularity) ? 1 : 0 )


  render(){
    return(
      <div>
      <h1></h1>
      <button onClick={this.agregarContactoRandom}>Añade un persona</button>
      <button conClick={this.ordenarContactos}>Ordenar contactos</button>

      <table>
        <tr>
          <th>{this.state.busquedas[0].name}</th>
        </tr>
      </table>
      {this.state.busquedas.map(
        (busqueda) => {
          return (
            <tr>
              <td>
                {busqueda.name}
              </td>
              <td>
                {busqueda.popularity}
              </td>
              <td>
                <img alt = 'Foto'src = {busqueda.pictureUrl}/>
              </td>

            </tr>
          )
        }
      )}
      </div>
    )
  }
}

export default Busqueda
