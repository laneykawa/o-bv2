import styled from 'styled-components'
import bgImg from '../../images/1975PiperArrow1.jpg'

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    grid-template-columns: 1fr;
    height: 100vh;
    width: 100%;
    padding: 1rem;
    color: whitesmoke;
    @media(min-width: 480px) {
        max-width: 30rem;
    }
    @media(min-width: 768px) {
        max-width: initial;
        gap: 1rem;
        padding: 2rem;
        height: auto;
        grid-auto-rows: min-content;
        grid-template-columns: 5fr 6fr;
    }
    @media(min-width: 1024px) {
        width: 90%;
        padding-left: 0;
    }
    @media(min-width: 1200px) {
        width: 70%;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: url(${bgImg});
        background-size: cover;
        width: 100vw;
        min-height: 100vh;
        filter: brightness(0.4);
        z-index: -1;
    }
`

export const Logo = styled.h1`
    font-size: 4em;
    @media(min-width: 768px) {
        font-size: 5em;
    }
`
export const Header = styled.h1`
    font-weight: normal;
    font-size: 1.7em;
    justify-self: ${props => props.form ? "left" : "center"};
    text-align: ${props => props.form ? "left" : "center"};
    display: ${props => props.form && "none"};
    width: 19ch;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        display: block;
        grid-row: 2 / 3;
    }
    @media(min-width: 1024px) {
        font-size: 1.9em;
    }
    @media(min-width: 1200px) {
        font-size: 2.2em;
    }
`
export const Prompt = styled.p`
    display: flex;
    justify-content: space-around;
    font-size: 1.1em;
    grid-row: 4 / 5;
    @media(min-width: 480px) {
        font-size: 1.2em;
    }
    @media(min-width: 768px) {
        grid-row: 3 / 4;
        gap: 1rem;
    }
    @media(min-width: 1024px) {
        font-size: 1.4em;
    }
    @media(min-width: 1200px) {
        font-size: 1.5em;
    }
`
export const PromptBtn = styled.button`
    border: none;
    background: transparent;
    font-size: 1em;
    color: indianred;
    transition: 0.2s ease;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        text-decoration-color: whitesmoke;
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const StyledAuthForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.toggled ? 'space-evenly' : 'space-between'};
    height: 50vh;
    gap: 0.3rem;
    position: relative;
    @media(min-width: 480px) {
        max-width: 30rem;
    }
    @media(min-width: 768px) {
        gap: 2rem;
        padding-left: 10%;
        grid-column: 2 / 3;
        grid-row: 1 / 4;
        height: 27rem;
        &:after { ${'' /* This is the divider line */}
            content: "";
            position: absolute;
            bottom: 0; 
            left: 0rem;
            width: 2px;
            height: 70%;
            background: indianred;
            z-index: 10;
        }
    }
`
export const Label = styled.label`
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-align: left;
`
export const Input = styled.input`
    width: 100%;
    height: 2.5rem;
    border-radius: 100px;
    border: none;
    background: whitesmoke;
    outline: none;
    padding: 0 1rem;
    font-size: 1.2em;
`
export const SubmitBtn = styled.button`
    background: indianred;
    border: none;
    border-radius: 100px;
    font-weight: bold;
    font-size: 1.2em;
    height: 2.5rem;
    color: whitesmoke;
    transition: 0.2s ease;
    margin-top: 1rem;
    &:hover {
        cursor: pointer;
        transform: translateY(2px);
        filter: brightness(1.1);
    }
    &:active {
        transform: scale(0.98);
    }
    @media(min-width: 768px) {
        margin: 0;
    }
`

