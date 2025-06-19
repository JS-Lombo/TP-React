import './ClubList.css';

const ClubList = ({ clubes, onEliminar }) => {
  return (
    <div className="club-list">
      {clubes.map((club) => (
        <div key={club.id} className="club-card">
          <h3>{club.nombre}</h3>
          <p>{club.pais}</p>
          <button onClick={() => onEliminar(club.id)}>❌ Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ClubList;
