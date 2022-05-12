import {Routes, Route} from 'react-router-dom'
import './App.css';
import StarwarsAPI from './components/starwarsAPI';
import Form from './components/form';
import Error from './components/error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/:what/:id" element={<StarwarsAPI/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
