import PageFrame from '../PageFrame/PageFrame';
import styled from 'styled-components';
import AddFriendButton from './SocialItems/AddFriendButton';
import FriendCard from './SocialItems/FriendCard';
import FriendSection from './SocialItems/FriendSection';
import FriendResponseButton from './SocialItems/FriendResponseButton';
import RankingSection from './SocialItems/RankingSection';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 18vw;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Social() {
    const [friendSection, setFriendSection] = useState()
    return (
        <PageFrame>
            <Top>
              <RankingSection></RankingSection>
            </Top>
            <Bottom>
                <FriendResponseButton></FriendResponseButton>
                <FriendSection friendSection={friendSection}></FriendSection>
            </Bottom>
        </PageFrame>
    );
}
