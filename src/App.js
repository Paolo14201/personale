
import './App.scss';

function App() {
  return (
    <>
          <header>
          <nav class="navbar navbar-expand-lg bg-red navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Progetto</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Manga</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contatti</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
      <div class ="container-titolo">
        <h2> Web app personale</h2>
        <p class="paragrafo">Prova Testo</p>
      </div>
    </>
    );
}

export default App;
