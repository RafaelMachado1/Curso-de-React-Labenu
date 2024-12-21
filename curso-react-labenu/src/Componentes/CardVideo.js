import React from "react";
import Usuario from "../Componentes/image.png"
import { InfosUsuarios } from "./InfosUsuarios";

export function CardVideo(props) {

    const nomeUsuario = "Rafael"

    function reproduzirVideo(){
        alert("O video está sendo reproduzido")
    }

    return(
        <div className="box-pagina-principal" onClick={reproduzirVideo}>
            {props.imagem}
            <h4>{props.tituloDoVideo}</h4>
           
            <InfosUsuarios
            imagemUsuario={<img src={Usuario} alt="imagem usuário" />}
            userName={nomeUsuario}/>

            
        </div>
    )
}

