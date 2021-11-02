import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import landing from './pages/Landing/landing';
import register from './pages/Register/register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={landing}></Route>  */}
        <Route path="/register" component={register}></Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
