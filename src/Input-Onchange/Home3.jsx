import React, { useState } from 'react'

const Home3 = () => {
    const[cd,setCd] = useState()
  return (
    <div className='root'>
        <h1>3. Input-Onchanges</h1>
      <p>{cd}</p>
      <input type='text' value={cd} onChange={(e) => setCd(e.target.value)}/>
    </div>
  )
}

export default Home3
