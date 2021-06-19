import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { StyledAuthForm, Header, Label, Input, SubmitBtn } from './AuthStyling'


function AuthForm({ toggled }) {
    const { createUser, signIn } = useContext(UserContext)
    const initInputs = {
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [inputs, setInputs] = useState(initInputs)
    const { email, password, confirmPassword } = inputs

    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!toggled) {
            createUser(email, password, confirmPassword)
        } else {
            signIn(email, password)
        }
    }

    return (
        <StyledAuthForm 
            toggled={toggled} 
            onSubmit={handleSubmit}
        >
            <Header form={'true'} >{toggled ? "Returning Customers" : "New Users"}</Header>
            <Label>
                Email
                <Input 
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </Label>
            <Label>
                Password
                <Input 
                    type="password" 
                    name="password"
                    onChange={handleChange}
                    value={password}
                />
            </Label>
            {!toggled && <Label>
                Confirm Password
                <Input 
                    type="password" 
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                />
            </Label>}
            <SubmitBtn>Sign {toggled ? "In" : "Up"}</SubmitBtn>
        </StyledAuthForm>
    );
}

export default AuthForm;