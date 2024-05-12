import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Kittens from './pages/Kittens';
import Puppies from './pages/Puppies';


export default function App() {


  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/cats" element={<Kittens/>}/>
        <Route path="/dogs" element={<Puppies/>}/>
      </Routes>
    </div>
  );
}


