import React, { useState } from "react";
import { Link } from "react-router-dom"
import Checkout from "../Checkout/Checkout";
import {
    AppBar,
    Logo,
    Container,
    Content,
    Column,
    Text,
    Bold,
    RightAligned,
    Divider,
    IconBtn,
    FinalInfo,
    InfoLine,
    SubmitBtn,
} from "./BookingStyling";
import User from "../../components/User/User";
import ImgSlider from "../../components/ImgSlider/ImgSlider";
import { BsPlusCircleFill } from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

function Booking(props) {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

    function handleChange(item) {
        setRange([item.selection]);
        console.log(item);
    }

    return (
        <>
            <AppBar>
                <Logo>O-D</Logo>
                <User onClick={props.signOut}></User>
            </AppBar>
            <Container>
                <ImgSlider />
                <Content>
                    <Column>
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
                    </Column>
                    <Column>
                        <Text as="h3">Choose a date range:</Text>
                        <DateRange
                            editableDateInputs={true}
                            onChange={handleChange}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                        />
                        {/* <Text as="h3">Start:</Text>
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
                        ></div> */}
                    </Column>
                    <Column>
                        <RightAligned>
                            <Text as="h1" color="#E35656">
                                $175 / hr
                            </Text>
                            <Text as="p">
                                <Bold>Start: </Bold>
                                September 16, 2021 10am
                            </Text>
                            <Text as="p">
                                <Bold>End: </Bold>
                                September 18, 2021 4pm
                            </Text>
                            <Divider />
                            <IconBtn>
                                Add another date
                                <BsPlusCircleFill />
                            </IconBtn>
                        </RightAligned>
                        <FinalInfo>
                            <InfoLine>
                                <Text as="h4">Total Hours:</Text>
                                <Text>29hrs</Text>
                            </InfoLine>
                            <InfoLine>
                                <Text as="h4">Amount due now:</Text>
                                <Text>$10</Text>
                            </InfoLine>
                            <InfoLine>
                                <Text as="h4">Total Booking Amount:</Text>
                                <Text>$5075</Text>
                            </InfoLine>
                        </FinalInfo>
                        <Text as="h4" color="#E35656" marginTop="2rem">
                            Before checking out you will be required to upload a
                            copy of your pilot's license and insurance
                        </Text>
                        <Link to={"/Checkout"}><SubmitBtn>Continue</SubmitBtn></Link>
                    </Column>
                </Content>
            </Container>
        </>
    );
}

export default Booking;
