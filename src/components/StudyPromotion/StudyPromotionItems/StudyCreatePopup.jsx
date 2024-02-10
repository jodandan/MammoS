import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import {
    Box,
    FirstLine,
    Title,
    SubTitle,
    ContainerBox,
    NameContainer,
    MemoContainer,
    LastContainer,
    NameInput,
    MemoInput,
    ButtonBox,
    ChangeButton,
    CancelButton,
} from './StudyCreatePopupCss.jsx';
export default function StudyCreatePopup({ setCreateStudyModalIsOpen, currentIndex }) {
    const [newName, setNewName] = useState('');
    const [newMemo, setNewMemo] = useState('');
    const [newPeople, setNewPeople] = useState('');

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleMemoChange = (e) => {
        setNewMemo(e.target.value);
    };

    const handlePeopleChange = (e) => {
        setNewPeople(e.target.value);
    };

    const modalClose = () => {
        setCreateStudyModalIsOpen(false);
    };

    const handleCreateStudy = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://3.38.7.193:8080/api/v1/study',
                {
                    memberLimit: parseInt(newPeople),
                    name: newName,
                    memo: newMemo,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Study created successfully:', response.data);
            alert('스티디가 생성되었습니다.');
            window.location.reload(); // 페이지 새로고침
            setCreateStudyModalIsOpen(false);
        } catch (error) {
            console.error('Error creating study:', error);
        }
    };

    return (
        <Box>
            <FirstLine>
                <Title>신규 스터디 생성</Title>
            </FirstLine>
            <ContainerBox>
                <NameContainer>
                    <Text>스터디이름</Text>
                    <NameInput
                        placeholder="새로 생성할 스터디의 이름을 입력해주세요."
                        value={newName}
                        onChange={handleNameChange}
                    />
                </NameContainer>
                <MemoContainer>
                    <MemoText>스터디 설명</MemoText>
                    <MemoInput
                        placeholder="스터디에 대한 간략한 설명을 입력해주세요."
                        value={newMemo}
                        onChange={handleMemoChange}
                    />
                </MemoContainer>
                <LastContainer>
                    <Text>참가 인원</Text>
                    <NameInput
                        placeholder="인원 수를 입력해주세요.."
                        value={newPeople}
                        onChange={handlePeopleChange}
                    />
                </LastContainer>
            </ContainerBox>
            <ButtonBox>
                <ChangeButton onClick={handleCreateStudy}>생성</ChangeButton>
                <CancelButton onClick={modalClose}>취소</CancelButton>
            </ButtonBox>
        </Box>
    );
}

StudyCreatePopup.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    setCreateStudyModalIsOpen: PropTypes.func.isRequired,
};

export const Text = styled.div`
  width: 30%;
  color: #000;
  font-family: 'PretendardBold';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const MemoText = styled(Text)`
  width: 38%;
`;
