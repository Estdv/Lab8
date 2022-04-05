import React from "react";
import "./Header.css"

export default class Header extends React.Component {
  render() {
    return (
        <header id="Header">
            <h2 id="titulo">Laboratorio 8: <br/> Memoria con React</h2>
            <div id="intentos">Intentos para completar el juego: 
            <div>{this.props.numIntentos}</div> 
            </div>
        </header>
    );
  }
}

