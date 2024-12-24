import { useState } from "react"
import { Button, Form, Input, MainContainer } from "./styles"

function MainPage(){

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")

    const onChangeNome = (event) => {
        setNome(event.target.value)
    }

    const onChangeIdade = (event) => {
        setIdade(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const botao = () => {
        const user = {
            nome: nome,
            idade: idade,
            email: email
        }

        console.log(user)
        setNome("")
        setIdade("")
        setEmail("")
    }


    return(
       <MainContainer>
            <h2>Formulário de inscrição</h2>
      
        <Form>
            <label>
                Nome:
                <Input onChange={onChangeNome} value={nome} />
            </label>
            <label>
                Idade:
                <Input onChange={onChangeIdade} value={idade}/>
            </label>
            <label>
                E-mail:
                <Input onChange={onChangeEmail} value={email}/>
            </label>

           <Button onClick={botao}>Clique aqui</Button>
        </Form>
       </MainContainer>
    )
}

export default MainPage