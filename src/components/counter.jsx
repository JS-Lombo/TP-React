import React, { useState } from 'react'

const Counter = ({ initial }) => {
  const [count, setCount] = useState(initial)

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>
  )
}

export default Counter

