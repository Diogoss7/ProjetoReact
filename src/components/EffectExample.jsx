import React from 'react'
import { useEffect, useState } from 'react'
export default function EffectExample() {

  const [counter, setCounter] = useState(0);
  const [idade, setIdade] = useState(0);


  useEffect(() => {
  }, [])
  return (
    <div>
      <p></p>
      {counter}
      <p></p>
      <button onClick={() => setCounter(counter + 1)}>
        <p></p>
        <p></p>
        Adicionar
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        <p></p>
        <p></p>
        subtrair
      </button>


      <button onClick={() => setCounter(counter==0)}>
        <p></p>
        <p></p>
        zerar
      </button>

    </div>
  )
}
