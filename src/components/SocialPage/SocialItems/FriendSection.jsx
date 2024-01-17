import React, {useState} from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';
import AddFriendButton from './AddFriendButton';

const FriendSectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 71vw;
`;


export default function FriendSection() {
    const [friends, setFriends] = useState([]);

    const handleAddFriend = (newFriend) => {
        setFriends([...friends, newFriend]);
    };

    return (
        <FriendSectionBox>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            <FriendCard></FriendCard>
            {friends.map((friend) => (
                <FriendCard key={friend.id} {...friend} />
            ))}
            <AddFriendButton onAddFriend={handleAddFriend} />
        </FriendSectionBox>
    );
}


