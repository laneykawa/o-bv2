import React, { useState } from 'react';
import AuthForm from './AuthForm'
import { Container, Logo, Header, Prompt, PromptBtn } from './AuthStyling'

function Auth(props) {
    const [ toggled, setToggled ] = useState(false)
  
    return (
        <Container>
            <Logo>O-D</Logo>
            <Header>Rent a plane for personal or instructional use today!</Header>
            <Prompt>
                {toggled ? "Not" : "Already"}  Registered?
                <PromptBtn 
                    onClick={() => setToggled(prev => !prev)}
                >
                    Sign {toggled ? "Up" : "In"} Here!
                </PromptBtn>
            </Prompt>
            <AuthForm toggled={toggled} />
        </Container>
    );
}

export default Auth;