import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const[num, setNum]=useState(0);

  function inputNum(e){
    var input=e.target.value;
    if(num ===0){ }
    setNum(num + input);
  }

  function clear(e){
    setNum(0);
  }

  return (
    <div>
      <Box m={5}/>
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="resultado">{num}</h1>
          <button className="whiteSQN" onClick={clear}>AC</button>
          <button className="whiteSQN">+/-</button>
          <button className="whiteSQN">%</button>
          <button className="orange">/</button>
          <button className="gray" onClick={inputNum} value={7}>7</button>
          <button className="gray" onClick={inputNum} value={8}>8</button>
          <button className="gray" onClick={inputNum} value={9}>9</button>
          <button className="orange">X</button>
          <button className="gray" onClick={inputNum} value={4}>4</button>
          <button className="gray" onClick={inputNum} value={5}>5</button>
          <button className="gray" onClick={inputNum} value={6}>6</button>
          <button className="orange">-</button>
          <button className="gray" onClick={inputNum} value={1}>1</button>
          <button className="gray" onClick={inputNum} value={2}>2</button>
          <button className="gray" onClick={inputNum} value={3}>3</button>
          <button className="orange">+</button>
          <button className="gray zero" onClick={inputNum} value={0}>0</button>
          <button className="gray">,</button>
          <button className="orange">=</button>
        </div>
      </Container>
    </div>
  )
}
