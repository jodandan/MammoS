import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchButtonImg from '../../assets/SearchButton.png'

const ModalFrame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6); // 반투명 배경
  z-index: 1000; 
`;

const ModalBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); // 상자에 그림자 추가
  z-index: 1001; // ModalFrame 위에 위치
  width: 55vw; 
  height: 30vw;
  overflow-y: auto; // 내용이 많을 경우 스크롤 가능
`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px
`;

const SearchFont = styled.p`
  display: flex;
  font-size: 23px;
  font-weight: bold;
  align-items: center;
  justify-content: left;
  margin-left: 4vw;
`;

const SearchInput = styled.input`
  flex-grow: 0.8; // 컨테이너 내에서 가능한 많은 공간을 차지합니다.
  padding: 10px;
  border: 1px solid #ccc; 
  border-radius: 5px; 
  margin-right: 10px; 
  margin-top: 15px;
`;

const SearchButton = styled.button`
  border: none;
  background-color: transparent; 
  cursor: pointer;
  background-image: url(${SearchButtonImg}); 
  background-repeat: no-repeat;
  background-position: center; 
  background-size: contain; 
  width: 25px; 
  height: 25px; 

  &:hover {
    opacity: 0.6; // 마우스 오버시 버튼 투명도 변경
  }
`;


const AddFriendModal = ({ isOpen, onClose}) => {
    const [friendId, setFriendId] = useState('');


    return (
        <ModalFrame onClick={onClose}>
            <ModalBox onClick={(e)=> e.stopPropagation()}>
                <SearchFont>친구추가</SearchFont>
                <SearchContainer>
                    <SearchInput
                        type="text"
                        value={friendId}
                        onChange={(e) => setFriendId(e.target.value)}
                        placeholder="친구 ID를 입력하세요"
                    />
                    <SearchButton src= {SearchButtonImg} />
                </SearchContainer>
            </ModalBox>
        </ModalFrame>
    );
};

AddFriendModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddFriendModal;
