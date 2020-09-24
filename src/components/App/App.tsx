import React from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width='30px' src="https://qualificamaisbrasil.com.br/wp-content/uploads/2018/09/icone-check-1.png" alt="check icon"/>
}

function App() {

  const handleClick = () => {
    window.alert()
  }

  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <Container >
        <Button 
          onClick={() => handleClick()}
          appendIcon={<TestComponent />}
        >
          Salvar
        </Button>  
      </Container>
    </div>
  );
}

export default App;
