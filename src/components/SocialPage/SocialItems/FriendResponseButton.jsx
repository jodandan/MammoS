import React, {useState} from 'react';
import styled from 'styled-components';
import FriendResponseModal from './FriendResponseModal';
import PropTypes from 'prop-types';

const FriendResponseBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 68vw;
  height: 8vw;
  margin-bottom: 10px;
`;

const CountBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 50%;
  width: 1.5vw;
  height: 1.5vw;
`;

const ResponseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 2vw;
  font-size: 18px;
  font-family: 'PretendardSemiBold';
  background: none;
  border: none;
  outline: none; 
  cursor: pointer; 
  text-decoration: underline;
  text-underline-offset: 4px;
  padding-top: 8px;
  padding-right: 10px;
`;

const FriendResponseButton = ({friendRequestNum, fetchPage}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleRequestButtonClick = () => {
        setIsModalOpen(true); // 모달 열기
    };
    return(
        <FriendResponseBox>
            {friendRequestNum !== 0 && <CountBadge>{friendRequestNum}</CountBadge>}
            <ResponseButton onClick={handleRequestButtonClick}>친구요청</ResponseButton>
            {isModalOpen && <FriendResponseModal onClose={() => setIsModalOpen(false)} fetchPage={fetchPage} />}
        </FriendResponseBox>
    );
}

FriendResponseButton.propTypes = {
    friendRequestNum: PropTypes.number.isRequired,
    fetchPage: PropTypes.func.isRequired
};

export default FriendResponseButton;