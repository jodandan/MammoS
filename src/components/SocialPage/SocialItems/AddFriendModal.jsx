import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchButtonImg from '../../assets/SearchButton.png';
import { Icon } from '@iconify/react';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); // 상자에 그림자 추가
  z-index: 1001; // ModalFrame 위에 위치
  width: 25vw;
  height: 10vw;
  overflow-y: auto; // 내용이 많을 경우 스크롤 가능
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SearchFont = styled.p`
  display: flex;
  font-size: 23px;
  font-weight: bold;
  align-items: center;
  justify-content: left;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
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

const Info = styled.p`
  font-family: 'PretendardSemiBold';

  &.bold {
    font-size: 17px;
  }

  &.light {
    margin-left: 10px;
    font-size: 13px;
    color: #909090;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const FriendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;
  border: 1px solid #d9d9d9;
  height: 25%;
  border-radius: 6px;
`;

//3.38.7.193:8080
const AddFriendModal = ({ onClose }) => {
  const [friendId, setFriendId] = useState('');
  const [friendInfo, setFriendInfo] = useState('');

  // 친구 검색
  async function SearchFriendHandler() {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // 친구 정보 검색 요청
      const response = await axios.get(
        `http://3.38.7.193:8080/api/v1/social/${friendId}`
      );

      if (response.data.httpResponseStatus === 'SUCCESS') {
        setFriendInfo(response.data.responseData);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('친구 정보 검색 중 오류 발생:', error);
      alert('친구 ID를 입력해주세요');
    }
  }

  // 친구 추가
  async function AddFriendHandler() {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // 친구 추가 요청
      const response = await axios.post(
        `http://3.38.7.193:8080/api/v1/social/request/${friendId}`
      );
      if (response.data.httpResponseStatus === 'SUCCESS') {
        // 친구 추가 이후 작업
        alert('친구 추가 성공');
        onClose();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('친구 정보 검색 중 오류 발생:', error);
      alert('서버 송신 오류');
    }
  }



  return (
    <ModalFrame onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <SearchFont>친구추가</SearchFont>
        <SearchContainer>
          <SearchInput
            type="text"
            value={friendId}
            onChange={(e) => setFriendId(e.target.value)}
            placeholder="친구 ID를 입력하세요"
          />
          <SearchButton src={SearchButtonImg} onClick={SearchFriendHandler} />
        </SearchContainer>
        {friendInfo && (
          <FriendBox>
            <InfoBox>
              <Info className="bold">
                {friendInfo.id} | {friendInfo.name}
              </Info>
              <Info className="light">
                {friendInfo.universityName} {friendInfo.majorName}
              </Info>
            </InfoBox>
            <Icon
              style={{
                marginRight: '20px',
                height: '15px',
                width: '15px',
                color: '#B9D967',
                cursor: 'pointer',
              }}
              icon="bi:plus-circle-fill"
              onClick={AddFriendHandler}
            />
          </FriendBox>
        )}
      </ModalBox>
    </ModalFrame>
  );
};

AddFriendModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default AddFriendModal;
