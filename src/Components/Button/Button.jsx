import './Button.css'
import React from 'react'


export function Button({ titulo, onClick }) {
    return (
        <button onClick={onClick}>
            {titulo}
        </button>
    );
}