import React, { useState } from 'react'

const Home4 = () => {
    const[open,setOpen] = useState(false)
    const handle = () => setOpen(!open)
  return (
    <div className='root'>
        <h1>4. Model Open-Close</h1>
      <button onClick={handle}>Model</button>

{   open &&
      <div className='root-main'>Model Content</div>

}

    </div>
  )
}

export default Home4
