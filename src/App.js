import './App.css';
import DateUpdater from './Components/DateUpdater/DateUpdater.js';

function App() {
  return (
    <body>
      <div id="wrapper">
        <div id="time">
          <p id="timern"></p>
          <DateUpdater />
        </div>
        <div id="header">
        </div>
        <div id="content">
          <div id="title">
            <p id="titletext">Rodolfinhogamer12</p>
          </div>
          <div id="addbar">
            <button id="addser">Adicionar anime</button>
          </div>
          <div id="addedser"></div>
        </div>
      </div>
    </body>
  );
}

export default App;
