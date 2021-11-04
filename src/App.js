import './App.css';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import landing from './pages/Landing/landing';
import Login from './pages/Login/login';
import Register from './pages/Register/register';


function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={landing}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
    </div>
    </Router>
  );
}

export default App;
