import DateUpdater from './components/DateUpdater/DateUpdater.jsx';

function App() {
  return (
    <body>
      <div id="wrapper">
        <div id="header">
          <a href="" id="login-container">Log in</a>
          <a href="" id="register-container">Register</a>
          <DateUpdater />
        </div>
        <div id="wallpaper">
        </div>
        <div id="content">
          <div id="addbar">
            <button id="add-anime-btn">Adicionar anime</button>
            <div id="addedser">
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
