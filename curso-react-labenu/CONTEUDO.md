# Curso-de-React
# Aula 3
## Componentes

### `O que é um componente?`

Na prática, componentes em React são funções com algumas regras especificas:

* `Primeira letra do nome maiúscula`;
* `Deve retornar um JSX (com um único pai);`
* Sintaxe de um componente:

![alt text](./src/Img/image.png)

### `O que deve ser um componente?`
* **Não existe uma regra** de quando componetizar uma parte da tela.
* Devemos considerar **criar** um componente quando:

    * Layout repetido;

        `Exemplo`

![alt text](./src/Img/image-1.png)

### `Analogia com Lego`

![alt text](./src/Img/image-2.png)

* Código muito grande e/ou confuso;
* Queremos dar um nome significativo à uma parte da interface;

### `Criando um componente`

![alt text](./src/Img/image-3.png)

* Quando colocamos um componente A dentro de um componente B, falamos que o componente A é filho do Componente B;
* Lembrando que o componente App.js, criado por padrão quando iniciamos um app React, é o pai de todos os outros componentes;

![alt text](./src/Img/image-4.png)

* Para colocar o componente na tela, chamamos ele em um componente pai, dentro do nosso JSX;

### `Usando um componente`

* Para chamar o componente, usamos uma sintaxe semelhante à do HTML. Nome deve ser mantido, com a letra maiúscula;
* Quando um componente não possui nada entre a abertura e o fechamento de sua tag, é preferível que se use a sintaxe self-closing.

### `Separando componentes em arquivos`
É permitido ter mais de um componente em um mesmo arquivo (afinal, eles são só funções). No entanto, é uma boa prática criar um arquivo por componente. Ligamos os arquivos por meio de imports e exports.

### `Criando e exportando um componente separado`

* Recomenda-se a criação de uma pasta chamada components, que guarde todos os componentes criados: 

![alt text](./src/Img/image-5.png)

* Todo arquivo que possui um componente deve importat o React no topo;
* Devemos exportar o componente (antes do nome);
* O arquivo deve ter o mesmo nome do componente que ele guarda.

![alt text](./src/Img/image-6.png)

### `Importando um componente`
* Precisamos importá-lo no arquivo que queremos usar. Fazemos isso por meio da palavra import. Atenção para as {chaves} em volta do nome do componente.

![alt text](./src/Img/image-7.png)

![alt text](./src/Img/image-8.png)




