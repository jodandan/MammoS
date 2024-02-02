import React from 'react';
import { PropTypes } from 'prop-types';
import {
    Box,
    ButtonBox,
    ChangeButton,
    CancelButton,
    FirstLine,
    SecondLine,
    Title,
} from './StudyCompletedPopupCss.jsx';
export default function StudyCompletedPopup({ isPublic, setIsPublic, setSecondModalIsOpen }) {
    const changeCompleted = () => {
        setSecondModalIsOpen(false);
        setIsPublic(true);

    }

    const modalClose = () => {
        setSecondModalIsOpen(false);
        setIsPublic(false);
    }
    
    return (
        <Box>
            <FirstLine>
                <Title>스터디 완수 여부 설정</Title>
            </FirstLine>
            <SecondLine>
                스터디를 완수할 시,
                <br />
                더 이상 활동을 할 수 없으며 복구할 수 없습니다.
            </SecondLine>
            <ButtonBox>
                <ChangeButton onClick={changeCompleted}>변경</ChangeButton>
                <CancelButton onClick={modalClose}>취소</CancelButton>
            </ButtonBox>
        </Box>
    )
}

StudyCompletedPopup.propTypes = {
    isPublic: PropTypes.bool.isRequired,
    setIsPublic: PropTypes.func.isRequired,
    setSecondModalIsOpen: PropTypes.func.isRequired,
};