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
`;

const CountBadge = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 50%;
  width: 1.5vw;
  height: 1.5vw;
  margin-bottom: 0.3vw;
  margin-right: -0.3vw;
`;

const ResponseButton = styled.button`
  width: 5vw;
  height: 2vw;
  font-size: 15px;
  font-weight: bold;
  background: none;
  border: none; 
  outline: none; 
  cursor: pointer; 
  text-decoration: underline;
`;

const FriendResponseButton = ({friendRequestNum}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleRequestButtonClick = () => {
        setIsModalOpen(true); // 모달 열기
    };
    return(
        <FriendResponseBox>
            {friendRequestNum !== 0 && <CountBadge>{friendRequestNum}</CountBadge>}
            <ResponseButton onClick={handleRequestButtonClick}>친구요청</ResponseButton>
            {isModalOpen && <FriendResponseModal onClose={() => setIsModalOpen(false)} />}
        </FriendResponseBox>
    );
}

FriendResponseButton.propTypes = {
    friendRequestNum: PropTypes.number.isRequired,
};

export default FriendResponseButton;