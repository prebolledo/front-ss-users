import React from 'react';
import logo from './logo.svg';
import './App.css';
import storage from './context/storage'
import { Provider } from './context'
import Users from './users'

function App() {
  return (
    <Provider context={storage}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
