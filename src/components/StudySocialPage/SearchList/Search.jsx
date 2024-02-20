import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Box,
  Searchbox,
  MemberList,
  MemberBox,
  InviteButton,
  Button,
} from './SearchCss.jsx';
import Plus from '../../assets/Plus.png';

import SearchButton from '../../assets/SearchButton.png';
export default function Search({ currentIndex }) {
  const [Data, setData] = useState([]);
  const [studyData, setStudyData] = useState(null);
  const [friendId, setFriendId] = useState('');
  const [userStudyIdx, setUserStudyIdx] = useState('');

  const onChange = (e) => {
    setFriendId(e.target.value);
  };

  const inviteFriend = () => {
    const token = localStorage.getItem('token');
    const inviteUrl = `http://3.38.7.193:8080/api/v1/study/members/invite/${studyData[currentIndex].userStudyIndex}/${friendId}`;
    axios.post(inviteUrl, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log('친구 추가 API 호출됨');
        alert('스터디 초대가 완료되었습니다.');
      })
      .catch((error) => {
        console.error('Error inviting friend:', error);
      });
  };

  const searchAPI = () => {

    const token = localStorage.getItem('token');
    const apiUrl = `http://3.38.7.193:8080/api/v1/social/${friendId}`;
    axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        setData(response.data);
        console.log('검색 API 연동 됌');
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearchClick = () => {
    searchAPI();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/study',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudyData(response.data.responseData);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <div style={{ margin: '0 auto', display: 'flex' }}>
        <Searchbox
          placeholder="추가하실 친구의 닉네임을 검색하세요"
          onChange={onChange}
          value={friendId}
        />
        <Img
            className='SearchButton'
            onClick={handleSearchClick}
            src={SearchButton}
            alt="검색버튼"
        />
      </div>
      <MemberList>
        {Data && Data.responseData && (
          <MemberBox className="monster">
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              height: '20px',
              margin: '5px'
            }}
            >
              <Text>{Data.responseData.name}&nbsp;|</Text>
              <Text>{Data.responseData.id}</Text>
              <SubText>&nbsp;{Data.responseData.universityName}</SubText>
              <SubText>&nbsp;{Data.responseData.collegeName}</SubText>
              <Button onClick={inviteFriend}>
                <img src={Plus} alt='플러스' />
              </Button>
            </div>
          </MemberBox>
        )}
      </MemberList>
    </Box>
  )
}

Search.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};

export const Text = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 3px;
`;

export const SubText = styled(Text)`
  color: #909090;
  font-size: 10px;
  font-weight: 300;
  margin: 5px;
`;

export const Img = styled.img`
  &.SearchButton{
    width: 1.5vw;
    height: 1.5vw;
    margin-top: 1vw;
    margin-right:  1vw;
    cursor: pointer;
    
  }
`;