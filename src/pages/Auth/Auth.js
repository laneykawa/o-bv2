import React, { useState } from 'react';
import { Container, Logo, Header, Prompt, PromptBtn, AuthForm, Label, Input, SubmitBtn } from './AuthStyling'

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
            <AuthForm toggled={toggled}>
                <Header form={'true'} >{toggled ? "Returning Customers" : "New Users"}</Header>
                <Label>
                    Email
                    <Input />
                </Label>
                <Label>
                    Password
                    <Input type="password" />
                </Label>
                {!toggled && <Label>
                    Confirm Password
                    <Input type="password" />
                </Label>}
                <SubmitBtn>Sign {toggled ? "In" : "Up"}</SubmitBtn>
            </AuthForm>
        </Container>
    );
}

export default Auth;