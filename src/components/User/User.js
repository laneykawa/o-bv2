import React from 'react';
import { StyledUser } from './UserStyling'
import { AiOutlineUser } from 'react-icons/ai'

function User(props) {
    return (
        <StyledUser>
            <AiOutlineUser />
        </StyledUser>
    );
}

export default User;