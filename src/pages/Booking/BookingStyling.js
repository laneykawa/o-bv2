import styled from "styled-components";

export const AppBar = styled.div`
    width: 100vw;
    height: 100px;
    background: #eee;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    color: #222;
    z-index: 1000;
`;

export const Logo = styled.h1``;

export const Content = styled.div`
    margin-top: 100px;
    align-self: flex-start;
`;
