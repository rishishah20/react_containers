import React, { useState } from 'react'
import './All.css';

const Home = () => {
    const [ab,setAb] = useState(0)
    const Plus =() => {ab<10 ? setAb(ab+1): setAb(10)}
    const Minus =() => {ab>0 ? setAb(ab-1): setAb(0)}
  return (
    <div className='root'>
      <h1>1. Plus-Minus</h1>
    <button onClick={Plus}>Plus</button>
  <p>{ab}</p>
  <button onClick={Minus}>Minus</button>
</div>
  )
}

export default Home
