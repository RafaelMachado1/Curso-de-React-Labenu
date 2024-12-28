import styled, {createGlobalStyle} from "styled-components"
import { Header } from "./components/Header"
import { FormularioCadastro } from "./components/FormularioCadastro/FormularioCadastro"
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";



const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;




function App (){

    //input controlado
    //Passo 1 - criar um estado para cada input
    const [titulo, setTitulo] = useState("")
    const [url, setUrl] = useState("")
    const [ descricao, setDescricao ] = useState("")

    //Passo 2 - onChange - funções e eventos
    function changeTitulo(event){
        setTitulo(event.target.value)
    }

    function changeUrl(event){
        setUrl(event.target.value)
    }

    function changeDescricao(event){
        setDescricao(event.target.value)
    }

    //passo 3 - passando estado e funções por props para o componente formulário

     //passo 4 - chamar o estado no value dentro do input
    // no componente FormlarioCadastro (serve para apagar o valor)

    return(
        <>
        <GlobalStyle />
        <Container>
            <aside>
                <Header />
                <FormularioCadastro // passando props para o componente formulárioCadastro
                    titulo={titulo}
                    url={url}
                    descricao={descricao}
                    changeTitulo={changeTitulo} 
                    changeUrl={changeUrl}
                    changeDescricao={changeDescricao}           
                />
            </aside>
            <TelaDaPostagem // passando props para componente telaDaPostagem
                    titulo={titulo}
                    url={url}
                    descricao={descricao}
            />
        </Container>
        </>
    )
}

export default App;