import './App.css';
import Auth from './pages/Auth/Auth'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`

function App() {
  return (
    <Container>
        <Auth />
    </Container>
  );
}

export default App;
