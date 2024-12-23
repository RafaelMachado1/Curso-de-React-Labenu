import React from "react"
import { useState } from "react"
import { Botao, Estacionamento, GaragemContainer } from "./styles"
import { Carro } from "../Carro/Carro"




export function Garagem({nome, alterarNome}){

    const initialState = {
        modelo: 'Corsa',
        cor: 'azul',
        ano: 2022,
        flex: true,
        adicionadoPor: 'Labenu',
      }
      
      const carro2 = {
        modelo: 'Ford Ka',
        cor: 'preto',
        ano: 2022,
        flex: true,
        adicionadoPor: 'Labenu',
      }

      const [automovel, setAutomovel] = useState(initialState)

      const handleAlteraAutomovel = () => {
        setAutomovel(carro2)
      }

      const handleAlteraNome = () => {
        alterarNome('Barbosa')
      }
    
    return(
       <GaragemContainer>
            <h1>Garagem da {nome}</h1>
            <Botao onClick={handleAlteraNome}>Muda nome</Botao>
            <Botao onClick={handleAlteraAutomovel} >Muda automóvel</Botao>

        <Estacionamento>
            <Carro automovel={automovel}/>            
        </Estacionamento>
       </GaragemContainer>       
    )
}