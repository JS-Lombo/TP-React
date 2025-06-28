
import './App.css'
import Card from './components/Card'
import players from './components/data/players';
import ShowHide from './components/ShowHide';

function App(){

  const playerList = players.map(v => {
    return <Card title={v.name} description={v.description} profession={v.profession}/>
  })

  return (<div className="App">

    <h1>..::: AUCKLAND CITY FC :::..</h1>

    <div className="container">
      {playerList}
    </div>
    <br />
    <br />
    <div className="button">
    <ShowHide/>
    </div>

  </div>
  );
}



export default App
