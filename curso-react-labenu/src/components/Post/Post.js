import React from "react";
import { PostContainer } from "./styled";
import { Comentario } from "../Comentario/Comentario.js";


export const Post = (props) => {


  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alterarCurtida()}>
        {props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagarPost()}>Apagar</button>
      
      <Comentario       
         comentarios={props.comentarios}
         setComentarios={props.setComentarios} 
         novoComentario={props.novoComentario}
        setNovoComentario={props.setNovoComentario} 
      /> 
    </PostContainer>
  );
};