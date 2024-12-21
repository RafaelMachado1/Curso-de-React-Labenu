import React from "react"
import GlobalStyle from "./GlobalStyle"
import { Main } from "./Componentes/Main/Main"
import { Header } from "./Componentes/Header/Header"
import { Footer } from "./Componentes/Footer/Footer"





export default function App(){
  return(
    <div>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}
  
