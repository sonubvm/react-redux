import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import Multi from './Component/Demofile';
import Layout from './Component/Layout';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Views from './Component/Views';
import Submit from './Component/Submitform';
import Data from './Component/Data';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />}/>
          <Route path="Edit/:id" element={<Home />}/>
          <Route path='Views' element={<Views />}/>
          <Route path ='Submit' element={<Submit navigate={'/Data'}/>}/>
          <Route path ='Data' element={<Data />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
