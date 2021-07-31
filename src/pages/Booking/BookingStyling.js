import styled from "styled-components";

export const AppBar = styled.div`
    width: 100vw;
    height: 100px;
    background: whitesmoke;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    color: #222;
    z-index: 1000;
`;

export const Logo = styled.h1`
    color: #222;
`;

export const Container = styled.div`
    margin-top: 100px;
    align-self: flex-start;
`;

export const Content = styled.div`
    color: #222;
    padding: 2rem 10rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
`;

export const Text = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    margin: 0.8rem 0;
    margin-top: ${(props) => props.marginTop};
`;

export const SubmitBtn = styled.button`
    background: #e35656;
    border: none;
    border-radius: 100px;
    font-weight: bold;
    font-size: 1.2em;
    height: 2.5rem;
    color: white;
    transition: 0.2s ease;
    margin-top: 2rem;
    width: 100%;
    &:hover {
        cursor: pointer;
        transform: translateY(2px);
        filter: brightness(1.1);
    }
    &:active {
        transform: scale(0.98);
    }
    @media (min-width: 768px) {
        margin: 0;
    }
`;
