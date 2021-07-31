import styled from 'styled-components'

export const StyledUser = styled.div`
    width: 35px;
    height: 35px;
    background: indianred;
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 1.2em;
    color: whitesmoke;
    box-shadow: 1px 2px 2px 0 rgba(0,0,0,0.2);
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        filter: brightness(1.05);
    }
`