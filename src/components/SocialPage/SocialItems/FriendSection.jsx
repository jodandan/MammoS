import React, { useEffect, useState } from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';
import AddFriendButton from './AddFriendButton';
import PropTypes from 'prop-types';

const FriendSectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 67vw;
`;

export default function FriendSection({ friends }) {
  return (
    <FriendSectionBox>
      {friends.map((friend) => (
        <FriendCard
          key={friend.friendIndex}
          idx={friend.friendIndex}
          id={friend.id}
          name={friend.name}
          universityName={friend.universityName}
          majorName={friend.majorName}
          pfp={friend.pfp}
          weeklyStudyTime={friend.weeklyStudyTime}
          dailyStudyTime={friend.dailyStudyTime}
          isOnline={friend.isOnline}
          isFixed={friend.isFixed}
        />
      ))}
      <AddFriendButton />
    </FriendSectionBox>
  );
}

FriendSection.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      friendIndex: PropTypes.number.isRequired,
      tier: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      universityName: PropTypes.string.isRequired,
      majorName: PropTypes.string.isRequired,
      pfp: PropTypes.string.isRequired,
      weeklyStudyTime: PropTypes.number.isRequired,
      dailyStudyTime: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      isFixed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
