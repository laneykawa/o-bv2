import React, { useContext, useEffect } from 'react'
import './App.css';
import Auth from './pages/Auth/Auth'
import styled from 'styled-components'
import { UserContext } from './context/UserProvider';
import firebase from 'firebase/app'
import 'firebase/auth'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`

function App() {
    const { user, setUser, signOut } = useContext(UserContext)

    useEffect(() => {
        console.log("test")
        firebase.auth().onAuthStateChanged(user => {
            if (user) setUser(user)
          });
    }, [])

    return (
        <Container>
            {!user ? <Auth /> : 
            <span>
                <h1>You are logged in!</h1>
                <button onClick={signOut}>Sign Out</button>
            </span>
            }
        </Container>
    );
}

export default App;
