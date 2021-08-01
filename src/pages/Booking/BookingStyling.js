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
    padding: 0 1rem;
    color: #222;
    z-index: 1000;
    @media (min-width: 480px) {
        padding: 0 3rem;
    }
    @media (min-width: 768px) {
        padding: 0 5rem;
    }
    @media (min-width: 1024px) {
        padding: 0 7rem;
    }
    @media (min-width: 1200px) {
        padding: 0 10rem;
    }
`;

export const Logo = styled.h1`
    color: #222;
`;

export const Container = styled.div`
    margin-top: 100px;
    align-self: flex-start;
`;

export const Content = styled.div`
    height: calc(100vh - 100px - 22rem);
    color: #222;
    display: grid;
    place-items: center;
    justify-items: center;
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 5rem 2rem 5rem;
    }
    @media (min-width: 1200px) {
    }
`;

export const Column = styled.div`
    padding: 1.5rem 1rem;
    @media (min-width: 480px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
    }
    @media (min-width: 1200px) {
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: #222;
`;

export const Text = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    margin: 0.8rem 0;
    margin-top: ${(props) => props.marginTop};
`;

export const Bold = styled.span`
    font-weight: bold;
`;

export const RightAligned = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
`;

export const IconBtn = styled.button`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border: none;
    background: transparent;
    font-weight: bold;
    font-size: 1.5em;
    gap: 10px;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const FinalInfo = styled.ul`
    list-style-type: none;
`;
export const InfoLine = styled.li`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    &:nth-of-type(1) {
        border: none;
        margin-top: 3rem;
    }
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
