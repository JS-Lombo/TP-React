import './App.css';
import { useState } from 'react';
import { clubs as clubesOriginales } from './data/clubs';
import ClubList from './components/ClubList/ClubList';

function App() {
  const [clubes, setClubes] = useState(clubesOriginales);

  const eliminarClub = (id) => {
    const nuevaLista = clubes.filter((club) => club.id !== id);
    setClubes(nuevaLista);
  };

  return (
    <div className="app">
      <header>
        <h1>Mundial de Clubes 2025</h1>
      </header>

      <ClubList clubes={clubes} onEliminar={eliminarClub} />
    </div>
  );
}

export default App;
