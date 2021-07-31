import styled from "styled-components";

export const StyledUser = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #222;
    display: grid;
    place-items: center;
    font-size: 1.2em;
    color: #222;
    transition: 0.2s ease;
    &:hover {
        box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        cursor: pointer;
        filter: brightness(1.05);
        background-color: #222;
        color: whitesmoke;
    }
`;
