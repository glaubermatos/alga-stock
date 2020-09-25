import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width='30px' src="https://qualificamaisbrasil.com.br/wp-content/uploads/2018/09/icone-check-1.png" alt="check icon"/>
}

function App() {

  const handleClick = () => {
    window.alert(`nome ${nome} preco ${preco}`)
  }

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <Container >
        <Input 
          label='Nome produto'
          placeholder='Informe o nome do produto'
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <Input 
          label='Preço produto'
          placeholder='Informe o preço do produto'
          value={preco}
          onChange={e => setPreco(e.target.value)}
        />

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
