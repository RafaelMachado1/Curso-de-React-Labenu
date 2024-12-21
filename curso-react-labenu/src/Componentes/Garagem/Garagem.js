import { BotaoLaranja, GaragemContainer, GaragemEstacionamento } from "./style";
import { Carro } from "../Carro/Carro";

export function Garagem(props) {
    
   
    
    return(
        <GaragemContainer>
        
        <h1>Garagem da {props.nome}</h1>
        <BotaoLaranja
         onClick={props.mensagemApresentacao}>Mensagem
        </BotaoLaranja>

        <GaragemEstacionamento>
            <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
            <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
            <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
            <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
            <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
            <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
        </GaragemEstacionamento>

        </GaragemContainer>
    )
}