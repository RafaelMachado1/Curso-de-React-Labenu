import react from "react";

export function InfosUsuarios(props){
     return(
        <div className="usuario">
            {props.imagemUsuario}
            <h4>{props.userName}</h4>
        </div>
     )
}