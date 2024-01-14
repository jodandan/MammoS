import React from 'react';
import styled from 'styled-components';

const FriendResponseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 68vw;
  height: 8vw;
`;

const ResponseButton = styled.button`
  width: 4vw;
  height: 2vw;
  font-size: 11px;
`;

const FriendResponseButton = () => {
    return(
        <FriendResponseBox>
            <ResponseButton>친구요청</ResponseButton>
        </FriendResponseBox>
    );
}

export default FriendResponseButton;