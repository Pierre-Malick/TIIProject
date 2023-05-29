import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup.js';
import HomePage from './pages/Home.js'
import Signin from './pages/Signin.js'
import Layout from './pages/Layout.js'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/Layout" element={<Layout />} />
      <Route path="/SignIn" element={<Signin />} />
      <Route path="/SignUp" element={<Signup />} />
      {/* <Route path="/fruit/:id" component={FruitDetailsComponent} /> */}
      {/* Define more routes here */}
      {/* The "exact" attribute should be used for the default route */}
      {/* You can also define a "NotFound" component for 404 errors */}
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);