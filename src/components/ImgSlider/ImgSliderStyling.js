import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 25rem;
    background-color: green;
    background-image: url(${props => props.bg && props.bg});
    background-size: cover;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.3);
`

export const Img = styled.img`
    height: 100%;
    object-fit: contain;
    filter: blur(0);
    backdrop-filter: blur(3px);
`