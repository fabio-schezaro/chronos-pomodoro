import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  //Sempre que usar useState, não usar atribuição diretamente.

  // const [numero, setNumero] = useState(() => {
  //   console.log('Lazy initialization');
  //   return 0;
  // });

  const [numero, setNumero] = useState(0);

  //Função reativa "handle"
  function handleClick() {
    setNumero(prevState => prevState + 1);
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      {/* handleClick não tem () pois será ativada no clique do botão */}
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              // labelText='Tarefa'
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
