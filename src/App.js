import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <form action="/someUrl">
        <input type="text" name={'username'}/>
          <input type="email" name={'email'}/>
          <button>save</button>
      </form>

    </div>
  );
}

export default App;
