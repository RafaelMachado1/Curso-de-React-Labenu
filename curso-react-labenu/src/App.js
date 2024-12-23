import React, { useState } from "react"
import GlobalStyle from "./GlobalStyle"
import { Garagem } from "./Componentes/Garagem/Garagem"


export default function App(){

  const [nome, setNome] = useState("Labenu")

  return(


    <div className="App">
      <GlobalStyle/>

      <Garagem nome={nome} alterarNome={setNome} />
   
    </div>
  )
}
  
