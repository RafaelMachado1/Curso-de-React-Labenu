import React, { useState } from 'react';

function Contador() {
  // Declara uma variável de estado chamada "contador" com o valor inicial de 0
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Contador;

 
