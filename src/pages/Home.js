import logo from '../images/moon1.jpg';
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';
import Signin from './Signin';
import Signup from './Signup';

function HomePage() {
    return (
      <div>
        <header>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1> SleepyGo </h1>
           <p> Let good sleep take care of your mental health </p> 

            {/* <Button element={Link} to="/SignIn">
                Sign In !
            </Button> */}

            <p className="lead">
                <button className="btn btn-success"
                    onClick={Signin}> Sign In !
                </button>
            </p>

            <p className="lead">
                <button className="btn btn-success"
                    onClick={Signup}> Sign Up !
                </button>
            </p>

           {/* <Button element={Link} to="/SignUp">
                Sign Up !
            </Button> */}
      </div>
    );
  }
   export default HomePage;