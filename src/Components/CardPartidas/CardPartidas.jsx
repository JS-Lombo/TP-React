import './CardPartidas.css'
import { Button } from '../Button/Button';

export const CardPartidas = ({titulo, jugadores, imagen, onClick, contador}) => {
    return(
        <div className='cardPartidas'>
            <header>
                <div>
                    <strong>{titulo}</strong>
                    <span>{jugadores}</span>
                </div>
                <img src={imagen} alt="Tablero"/>
            </header>
            <aside>
                <Button 
                titulo = {`Veces vista: ${contador ?? 0}`}
                onClick={onClick}
                />
            </aside>
        </div>
        ); 
}