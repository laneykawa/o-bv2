import React from 'react';
import { Container, Img } from './ImgSliderStyling'

function ImgSlider(props) {
    return (
        <Container bg="https://source.unsplash.com/random">
            <Img src="https://source.unsplash.com/random" />
        </Container>
    );
}

export default ImgSlider;