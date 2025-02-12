import React, { useState } from 'react'

const Home2 = () => {
    const [change,setChange] =useState('off')
  return (
    <div className='root'>
        <h1>2. True-False</h1>
      <p>{change ? 'on' : 'off'}</p>
      <button onClick={() =>setChange(!change)}>Click</button>
    </div>
  )
}

export default Home2
