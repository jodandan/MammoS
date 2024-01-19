import React, {useState} from 'react';
import styled from 'styled-components';
import AddButtonImg from '../../assets/AddButton.png'
import AddFriendModal from './AddFriendModal';
import PropTypes from 'prop-types';

const AddFriendButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34vw;
  height: 8.5vw;
  margin-top: 1.5vw;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to bottom, #A6E087, #96A3D4, #AEC0FF);
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box,border-box;
  background-color: white;
`;

const AddButton = styled.img`
  width: 2.7vw;
  height: 2.7vw; 
  background-color: #D9D9D9;
  border-radius: 50%;
`;

const AddFriendButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddButtonClick = () => {
        setIsModalOpen(true); // 모달 열기
    };

    return (
        <>
            <AddFriendButtonBox>
                <AddButton src={AddButtonImg} onClick={handleAddButtonClick}></AddButton>
            </AddFriendButtonBox>
            {isModalOpen && <AddFriendModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

export default AddFriendButton;
