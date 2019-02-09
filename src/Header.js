import React, { Component } from 'react';

class Header extends Component {

  render(props){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.seccion}</h3>
        <ul>
          <li>{this.props.secciones.seccion1}</li>
          <li>{this.props.secciones.seccion2}</li>
          <li>{this.props.secciones.seccion3}</li>
        </ul>
      </div>
    )
  }
}

export default Header
