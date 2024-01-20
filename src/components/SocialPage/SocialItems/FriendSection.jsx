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

    const handleFixFriend = (id) => {
        setFriends(friends.map(friend =>
            friend.id === id ? { ...friend, isFixed: !friend.isFixed } : friend
        ));
    };

    const fixedFriends = friends.filter(friend => friend.isFixed); // 고정된 친구
    const regularFriends = friends.filter(friend => !friend.isFixed); // 고정되지 않은 친구들

    return (
        <FriendSectionBox>
            {fixedFriends.map((friend) => (
                <FriendCard key={friend.id} {...friend} onFix={handleFixFriend} />
            ))}
            {regularFriends.map((friend) => (
                <FriendCard key={friend.id} {...friend} onFix={handleFixFriend} />
            ))}
            <AddFriendButton onAddFriend={handleAddFriend} />
        </FriendSectionBox>
    );
}


