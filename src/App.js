import logo from './images/moon1.jpg';
import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.js';
import HomePage from './pages/Home.js'
import Signin from './pages/Signin.js'
import Layout from './pages/Layout.js'


//check jwt token
// const token = localStorage.getItem("token");
// if (token) {
//     setAuthToken(token);
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" component={<HomePage />} />
            <Route path="/SignIn" component={<Signin />} />
            <Route path="/SignUp" component={<Signup />} />
            {/* <Route path="/fruit/:id" component={FruitDetailsComponent} /> */}
            {/* Define more routes here */}
            {/* The "exact" attribute should be used for the default route */}
            {/* You can also define a "NotFound" component for 404 errors */}
          {/* </Routes> */}
        {/* </BrowserRouter> */}
        <p> nothing </p>
    </div>
  );
}

export default App;
