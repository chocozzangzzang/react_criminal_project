// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import MAIN from './contents/main'

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MAIN />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
