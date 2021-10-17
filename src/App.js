import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>LocalBitz</h1>
        <p>Home Cooked Food at your doorsteps!!</p>
        <div className="Button-grp">
        <Button name="Login" />
        <Button name="Register" />
        </div>
      </div>
    </div>
  );
}

export default App;
