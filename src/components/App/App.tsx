import React from 'react';
import './App.css';
import TextComponent from '../TestComponent';

const user = {
  name: 'Glauber',
  age: 32,
  email: 'glaub.oliveira@hotmail.com'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bem vindo!
        </p>
        <TextComponent user={user} />
      </header>
    </div>
  );
}

export default App;
