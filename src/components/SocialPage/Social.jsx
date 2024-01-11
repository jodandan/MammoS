import PageFrame from '../PageFrame/PageFrame';
import styled from 'styled-components';
import AddFriendButton from './SocialItems/AddFriendButton';
import FriendCard from './SocialItems/FriendCard';
import FriendSection from './SocialItems/FriendSection';
import RankingSection from './SocialItems/RankingSection';
// import FriendResponseButton from './SocialItems/FriendReponseButton';
import {useState} from 'react';

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Social() {
    return (
        <PageFrame>
            <Top>
              <RankingSection></RankingSection>
            </Top>
            <Bottom>
               <FriendSection></FriendSection>
            </Bottom>
        </PageFrame>
    );
}
