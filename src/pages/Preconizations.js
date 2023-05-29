import logo from '../images/moon1.jpg';

function onSignOut() {
    window.location.href = '/'
  }

function Preconizations() {
    return (
      <div>
        <header>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1> SleepyGo </h1>
           <p> Let good sleep take care of your mental health </p>

            <p className="lead">
                Based on the data you recently provided, here's your mental health indicator and advices :
            </p>

            <p> Your mental health is at 89% ! Keep up the great work and pay attention to mental traps today. </p>
            <p>
            <button className="btn btn-primary" onClick={() => onSignOut()}>Se déconnecter</button>
            </p>
      </div>
    );
  }
   export default Preconizations;