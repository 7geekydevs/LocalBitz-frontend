import './App.css';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import landing from './Landing/landing'
//import Login from './pages/Login/login';
import Register from './Customer/pages/Register/register';
import login from './Customer/pages/Login/login';
import home from './Customer/pages/Home/home';


function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={landing}></Route>
        <Route exact path="/customers" component={Register}></Route>
        {/* <Route exact path="/cooks" component={Register}></Route> */}
        <Route exact path="/customers/login" component={login}></Route>
        <Route exact path="/cooks" component={home}></Route>
    </div>
    </Router>
  );
}

export default App;
