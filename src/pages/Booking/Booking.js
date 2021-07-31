import React from "react";
import { AppBar, Logo, Content } from "./BookingStyling";
import User from "../../components/User/User";
import ImgSlider from "../../components/ImgSlider/ImgSlider";

function Booking(props) {
    return (
        <>
            <AppBar>
                <Logo>O-D</Logo>
                <User onClick={props.signOut}></User>
            </AppBar>
            <Content>
                <ImgSlider />
            </Content>
        </>
    );
}

export default Booking;
