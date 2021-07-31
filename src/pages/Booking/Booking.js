import React from "react";
import {
    AppBar,
    Logo,
    Container,
    Content,
    Text,
    SubmitBtn,
} from "./BookingStyling";
import User from "../../components/User/User";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import { BsPlusCircleFill } from "react-icons/bs";

function Booking(props) {
    return (
        <>
            <AppBar>
                <Logo>O-D</Logo>
                <User onClick={props.signOut}></User>
            </AppBar>
            <Container>
                <ImgSlider />
                <Content>
                    <div>
                        <Text as="h1">1975 Piper Arrow</Text>
                        <Text as="h4" color="#E35656">
                            *50 to 100 hour blocks are discounted
                        </Text>
                        <Text as="h4" color="#E35656">
                            *Overnight flights available 1 week in advance
                        </Text>
                        <Text as="h3" marginTop="3rem">
                            Description
                        </Text>
                        <Text>
                            This is a beautiful 1975 Piper Arrow II 200 hp
                            retractable complex plane. You can rent this plane
                            out for business, instructing flight lessons or
                            clocking your pilot hours day or night. You can also
                            take the plane out for pleasure and enjoy a weekend
                            up in Jackson Hole or a night down in St. George.
                            The Sky is the limit.
                        </Text>
                        <Text as="h3" color="#E35656" marginTop="3rem">
                            *Important*
                        </Text>
                        <Text as="h4" color="#E35656">
                            $10 deposit due at checkout. Hourly rate is due upon
                            returning the plane. Total cost is only an estimate,
                            you will only be charged for time that the plane is
                            actually in the air.
                        </Text>
                    </div>
                    <div>
                        <Text as="h3">Start:</Text>
                        <div
                            style={{
                                width: "300px",
                                height: "180px",
                                border: "1px solid gray",
                            }}
                        ></div>
                        <Text as="h3">End:</Text>
                        <div
                            style={{
                                width: "300px",
                                height: "180px",
                                border: "1px solid gray",
                            }}
                        ></div>
                    </div>
                    <div style={{ width: "80%" }}>
                        <div style={{ textAlign: "right" }}>
                            <Text as="h1" color="#E35656">
                                $175 / hr
                            </Text>
                            <Text as="p">
                                <span style={{ fontWeight: "bold" }}>
                                    Start:{" "}
                                </span>
                                September 16, 2021 10am
                            </Text>
                            <Text as="p">
                                <span style={{ fontWeight: "bold" }}>
                                    End:{" "}
                                </span>
                                September 18, 2021 4pm
                            </Text>
                            <div
                                style={{
                                    height: 2,
                                    background: "#222",
                                }}
                            ></div>
                            <Text
                                as="h3"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    gap: 10,
                                    cursor: "pointer",
                                }}
                            >
                                Add another date{" "}
                                <BsPlusCircleFill
                                    style={{ fontSize: "1.5em" }}
                                />
                            </Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "2rem",
                            }}
                        >
                            <Text as="h4">Total Hours:</Text>
                            <Text>29hrs</Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderTop: "1px solid lightgray",
                            }}
                        >
                            <Text as="h4">Amount due now:</Text>
                            <Text>$10</Text>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderTop: "1px solid lightgray",
                            }}
                        >
                            <Text as="h4">Total Booking Amount:</Text>
                            <Text>$5075</Text>
                        </div>
                        <Text as="h4" color="#E35656" marginTop="2rem">
                            Before checking out you will be required to upload a
                            copy of your pilot's license and insurance
                        </Text>
                        <SubmitBtn>Continue</SubmitBtn>
                    </div>
                </Content>
            </Container>
        </>
    );
}

export default Booking;
