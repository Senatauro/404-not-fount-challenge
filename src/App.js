import scarecrow from './images/Scarecrow.png';

import './App.css';

function App() {
  return (
    <div className="page-404">
      <p className="title">404 not found</p>
      <div className="info-404">
        <img src={scarecrow} alt="Scary 404 Scarecrow" />
        <div className="text-404">
          <h1 className="title-404">I have bad news for you</h1>
          <p className="desc-404">The page you are looking for might be removed or is temporarily unavailable</p>
          <button className="link-404">Back to homepage</button>
        </div>
      </div>
      <div className="footer-404">created by <a href="https://senatauro.github.io/">Senatauro</a> - devChallenges.io</div>
    </div>
  );
}

export default App;
