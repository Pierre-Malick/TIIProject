import logo from '../images/moon1.jpg';

function onSignIn() {
  window.location.href = '/auth'
}

function HomePage() {
    return (
      <div>
        <header>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1> SleepyGo </h1>
           <p> Let good sleep take care of your mental health </p>

           <p>
            <button className="btn btn-primary" onClick={() => onSignIn()}>Se connecter</button>
            </p>

      </div>
    );
  }
   export default HomePage;