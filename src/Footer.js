import React, { Component } from 'react';

class Footer extends Component{
    state = {
      newLetter: "Inscríbete"
    }
  render(){
    return(
      <div>
        Es el footer
        <h1>{this.state.newLetter}</h1>
      </div>
    )
  }
}

export default Footer
