import logo from '../images/moon1.jpg';

function onSignOut() {
    window.location.href = '/'
  }

function Preconizations() {
    return (
      <div>
        <header class="text-center">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 class="text-center"> SleepyGo </h1>
           <p class="text-center"> Let good sleep take care of your mental health </p>
            <div class="text-center">
                <p class="text-center">
                Based on the data you recently provided, here's your mental health indicator and advices :
                </p>
            </div>


            <p class="text-center"> Your mental health is at 89% ! Keep up the great work and pay attention to mental traps today. </p>
            <div class="text-center">
                <div class="align-text-bottom">
                    <button className="btn btn-primary" onClick={() => onSignOut()}>Logout</button>
                </div>
            </div>
      </div>
    );
  }
   export default Preconizations;