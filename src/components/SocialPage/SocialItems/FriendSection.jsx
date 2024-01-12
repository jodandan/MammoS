import React from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';

const FriendSectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 71vw;
`;


export default function FriendSection() {
    return (
        <FriendSectionBox>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
        </FriendSectionBox>
    );
}
