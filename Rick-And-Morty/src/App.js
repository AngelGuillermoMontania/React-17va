
import './App.css';
import Characters from './components/characters';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title='Rick And Morty API'/>
      <Characters />
    </div>
  );
}

export default App;
