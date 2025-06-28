
import React, { useState } from 'react';

function ShowHide() {

    const [show, setShow] = useState(true);

        const handleClick = (event) => {
            setShow(!show);
        }
         


  return (
    <div>
        <button onClick={handleClick}>{show ? "Me quedó claro": "¡Importante!"}</button>
        {show && <h2>¡Aguante Boquita Siempre!</h2>}
      

    </div>
  )
}

export default ShowHide
