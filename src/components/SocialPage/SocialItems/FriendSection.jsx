import React from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';

const FriendSectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
`;



export default function FriendSection() {
    return (
        <FriendSectionBox>
            <FriendCard></FriendCard>
        </FriendSectionBox>
    );
}
