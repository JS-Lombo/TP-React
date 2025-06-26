
import React, { useState } from 'react';
import { CardPartidas } from '../Components/CardPartidas/CardPartidas';
import { Header } from '../Components/Header/Header';
import tablero from '../assets/Tablero.png';
import tableroinv from '../assets/TableroInv.png';




export function Home(){
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [contador3, setContador3] = useState(0);
    const [contador4, setContador4] = useState(0);
    const [contador5, setContador5] = useState(0);
    return(
        <article>
            <Header/>   
            <div className='cards-container'>
                <CardPartidas
                    titulo={"Partida 1"}
                    jugadores={"Marcos Bayget/Juan Queimaliños"}
                    imagen={tablero}
                    onClick={() => setContador1(contador1 + 1)}
                    contador={contador1}
                />
                <CardPartidas
                    titulo={"Partida 2"}
                    jugadores={"Ale Quiro/Marcos Bayget"}
                    imagen={tableroinv}
                    onClick={() => setContador2(contador2 + 1)}  
                    contador={contador2}
                
                />
                <CardPartidas
                    titulo={"Partida 3"}
                    jugadores={"Marcelo Re/Marcos Bayget"}
                    imagen={tableroinv}
                    onClick={() => setContador3(contador3 + 1)}
                    contador={contador3}   
                />
                <CardPartidas
                    titulo={"Partida 4"}
                    jugadores={"Marcos Bayget/Ale Quiro"}
                    imagen={tablero}
                    onClick={() => setContador4(contador4 + 1)}
                    contador={contador4}   
                />
                <CardPartidas
                    titulo={"Partida 5"}
                    jugadores={"Juan Queimaliños/Marcos Bayget"}
                    imagen={tableroinv}
                    onClick={() => setContador5(contador5 + 1)}
                    contador={contador5}   
                />
            </div>
        </article>
    )
}