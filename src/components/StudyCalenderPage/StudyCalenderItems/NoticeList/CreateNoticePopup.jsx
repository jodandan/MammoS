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
    StyledDatePicker,
} from './CreateNoticePopupCss.jsx';
import { ko } from 'date-fns/esm/locale';

export default function CreateNoticePopup({ setEditModalIsOpen, currentIndex }) {
    const [studyData, setStudyData] = useState(null);
    const [newSummary, setNewSummary] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');


    const handleMemoChange = (e) => {
        setNewSummary(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePlaceChange = (e) => {
        setPlace(e.target.value);
    };

    const modalClose = () => {
        setEditModalIsOpen(false);
    }

    function setChangeDate(dates) {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token);
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

    //스터디 일정 API 로직
    const handleCreateNotice = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `http://3.38.7.193:8080/api/v1/study/projects/${studyData[currentIndex].userStudyIndex}`,
                {
                    startTime: startDate,
                    endTime: endDate,
                    name: title,
                    isStudy: true,
                    studyIdx: studyData[currentIndex].studyIndex,
                    memo: newSummary,
                    place: place
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Notice created:', response.data);
            alert('스터디 일정이 생성되었습니다.');
            location.reload();
        } catch (error) {
            console.error('Error creating notice:', error);
        }
    };

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
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <SubTitleBox>
                        <DataInput
                        >
                            <StyledDatePicker
                                selectsRange={true}
                                locale={ko}
                                selected={startDate}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(newDates) => setChangeDate(newDates)}
                                dateFormat="yyyy-MM-dd"
                            />
                        </DataInput>
                        <PlaceInput
                            placeholder="장소를 입력해주세요"
                            value={place}
                            onChange={handlePlaceChange}
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
                <ChangeButton onClick={handleCreateNotice}>생성</ChangeButton>
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



