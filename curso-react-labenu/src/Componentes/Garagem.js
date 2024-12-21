import Carro from "./Carro";

function Garagem(props) {


    return (
      <div>
        <h1>Garagem da Labenu</h1>
        <button onClick={props.mensagemApresentacao}>Mensagem</button>
        <Carro
         cor={"Vermelho"}
         ano={2022}
         flex={"true"}
         adicionadoPor={props.nome}
          />

        <Carro
        cor={"Verde"}
        ano={2020}
        flex={"false"}
        adicionadoPor={props.nome}
         />

       

      </div>
    );
  }
  
  export default Garagem;