import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='register' element={<Registration />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
