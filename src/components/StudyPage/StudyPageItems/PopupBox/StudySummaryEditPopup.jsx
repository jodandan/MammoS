import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import {
    Box,
    FirstLine,
    Title,
    ContainerBox,
    MemoContainer,
    MemoInput,
    ButtonBox,
    ChangeButton,
    CancelButton,
} from './StudySummaryEditPopupCss.jsx';

export default function StudySummaryEditPopup({ setEditModalIsOpen, currentIndex }) {
    const [studyData, setStudyData] = useState(null);
    const [newSummary, setNewSummary] = useState('');


    const handleMemoChange = (e) => {
        setNewSummary(e.target.value);
    };

    const modalClose = () => {
        setEditModalIsOpen(false);
    };

    //변경 버튼 로직
    const handleApiCall = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.patch(
                `http://3.38.7.193:8080/api/v1/study/project/${studyData[currentIndex].userStudyIndex}/${studyData[currentIndex].home.projectTabResponseDto.projectIdx}`,
                {
                    newSummary: newSummary,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('변경이 완료되었습니다.');
            modalClose();
            window.location.reload(); // 페이지 새로고침
        } catch (error) {
            console.error('변경 실패:', error);
        }
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
    }, [currentIndex]);

    return (
        <Box>
            <FirstLine>
                <Title>스터디 메모 변경</Title>
            </FirstLine>
            <MemoContainer>
                <MemoText>스터디메모</MemoText>
                <MemoInput
                    placeholder="변경하실 메모를 입력해주세요"
                    value={newSummary}
                    onChange={handleMemoChange}
                />
            </MemoContainer>
            <ButtonBox>
                <ChangeButton onClick={handleApiCall}>변경</ChangeButton>
                <CancelButton onClick={modalClose}>취소</CancelButton>
            </ButtonBox>
        </Box>
    )
}

StudySummaryEditPopup.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    setEditModalIsOpen: PropTypes.func.isRequired,
};

export const MemoText = styled.div`
  width: 10vw;
  height: 20vw;
  color: #000;
  font-family: 'PretendardBold';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;



