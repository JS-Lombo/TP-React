import './Header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <header className='head'>
        <h1>Archivos Ajedrez</h1> 
        <nav className="navigation">   
            <ul className="navigation__list">
                <li className="navigation-item">
                    <Link to="/">Partidas</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/">Archivo</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/">Aperturas</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
};