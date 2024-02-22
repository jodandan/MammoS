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
    Border,
    InputBox,
    SubTitleBox,
    TitleInput,
    DataInput,
    PlaceInput,
    SubBox,
} from './CreateNoticePopupCss.jsx';

export default function CreateNoticePopup({ setEditModalIsOpen, currentIndex }) {
    const [studyData, setStudyData] = useState(null);
    const [newSummary, setNewSummary] = useState('');


    const handleMemoChange = (e) => {
        setNewSummary(e.target.value);
    };

    const modalClose = () => {
        setEditModalIsOpen(false);
    }

    return (
        <Box>
            <FirstLine>
                <Title>스터디 일정 추가</Title>
            </FirstLine>
            <Border />
            <ContainerBox>
                    <InputBox>
                        <TitleInput
                            placeholder="제목을 입력해주세요"
                        />
                        <SubTitleBox>
                            <DataInput
                                placeholder="날짜를 설정해주세요"
                            />
                            <PlaceInput
                                placeholder="장소를 입력해주세요"
                            />
                        </SubTitleBox>
                    </InputBox>
                    <MemoContainer>
                        <MemoInput
                            placeholder="메모를 입력해주세요"
                            value={newSummary}
                            onChange={handleMemoChange}
                        />
                    </MemoContainer>
            </ContainerBox>
            <ButtonBox>
                <ChangeButton>변경</ChangeButton>
            </ButtonBox>
        </Box>
    )
}

CreateNoticePopup.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    setEditModalIsOpen: PropTypes.func.isRequired,
};

export const MemoText = styled.div`
  width: 38%;
  color: #000;
  font-family: 'PretendardBold';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;



