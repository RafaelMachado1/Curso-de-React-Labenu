import React from 'react'
import { ContainerComentario } from './styled'

//export const Post = (props) =>
export const Comentario = (props) => {

    const adicionarComentario = () => { 
        props.setComentarios(props.novoComentario); 
        props.setNovoComentario(''); 
    };


    return (
        <ContainerComentario>
           <h3>comentario</h3> 
                <input type="text" 
                    value={props.novoComentario}
                    onChange={(event) => props.setNovoComentario(event.target.value)}
                    placeholder="Adicione um comentário" 
                /> 
                
                <button onClick={adicionarComentario}>Adicionar</button> 
            {props.comentarios && ( 
            <div> 
                <p>{props.comentarios}</p> 
            </div> )}
        </ContainerComentario>
    )
}




    