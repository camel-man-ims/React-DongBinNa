import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const data={
  name:"임얼쑤",
  gender:"man",
  age:25
}

function App() {
  return (
    <Customer
    name={data.name}
    gender={data.gender}
    age={data.age}
    />
  );
}

export default App;
