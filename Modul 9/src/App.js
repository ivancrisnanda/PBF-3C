import React, { Component } from 'react';
import logo from './logo.svg';
import gambar from './es.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

// class App extends Component {
function App() {
  // render() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Biodata</h3>
        <br></br>
        <img src={gambar} width="200" />
        <p>Nama : Muhammad Nizar Firmansyah</p>
        <p>Kelas : TI-3C</p>
        <p>NIM : 1741720155</p>
        <p>Alamat : Pasuruan</p>

      </header>
    </div>
    //   <div className="App">
    //     <h1>Hello World!</h1>
    //   </div>
  );
}


export default App;
