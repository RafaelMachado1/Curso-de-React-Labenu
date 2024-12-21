import React from "react"
import CardVideo from "../CardVideo"
import { Menu } from "./styled"
import Nav from "../Nav/Nav"



export function Main (){

    const card1 = {
        tittulo: "Título do Vídeo",
        imagemDoVídeo: "https://picsum.photos/400/400?a=1",
        textoAlternativo: "descrição da imagem"
    }

    return(
        <Menu>
        
            <Nav/>
        
        
            <section className="painel-de-videos">
                <CardVideo
                image1={card1.imagemDoVídeo}
                titulo={card1.tittulo}
                textoAlternativo={card1.textoAlternativo}          
                />
            </section>

        </Menu>
    )
}