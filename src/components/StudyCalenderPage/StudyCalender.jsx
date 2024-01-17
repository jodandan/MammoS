import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import { useNavigate } from 'react-router-dom';
import {
    FrameContainer,
    ContainerBox,
    StudyTitle,
    SubText,
    TextBox,
    SideMenuBar,
    Img,
    Container,
    CheckContainer,
    FirstLine,
    LeftSide,
    DataBox,
    LocationBox,
    NoticeBox,
    Title,
    EditBox,
    InputBox,
    LeftBox,
} from './StudyCalenderCss.jsx';
import home from '../assets/Home.png';
import ClickCalender from '../assets/ClickCalender.png';
import User from '../assets/User.png';
import List from '../assets/List.png';
import Edit from '../assets/Edit.png';

export default function StudyCalender() {
    const [studyData, setStudyData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token);
                const response = await axios.get('http://3.38.7.193:8080/api/v1/study', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setStudyData(response.data.responseData.content[0]);
            } catch (error) {
                console.error('Error fetching study information:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <NavigationBar />
            <FrameContainer>
                <SideMenuBar>
                    <Container>
                        <Img onClick={() => navigate('/studyHome')} src={home} alt='홈' />
                    </Container>
                    <CheckContainer>
                        <Img onClick={() => navigate('/studyCalender')} src={ClickCalender} alt='캘린더' />
                    </CheckContainer>
                    <Container>
                        <Img src={User} alt='유저' />
                    </Container>
                    <Container>
                        <Img src={List} alt='리스트' />
                    </Container>
                </SideMenuBar>
                <ContainerBox>
                    {studyData && (
                        <TextBox>
                            <StudyTitle>{studyData.home.title}</StudyTitle>
                            <SubText>{studyData.home.summary !== null ? studyData.home.summary : '없음'}</SubText>
                        </TextBox>
                    )}
                    <LeftBox>
                        {studyData && studyData.home && (
                            <FirstLine>
                                <LeftSide>{studyData.home.projectTabResponseDto.projectTitle}</LeftSide>
                                <DataBox>{studyData.home.projectTabResponseDto.startDate} ~ {studyData.home.projectTabResponseDto.endDate}</DataBox>
                                <LocationBox>{studyData.home.projectTabResponseDto.place}</LocationBox>
                            </FirstLine>
                        )}

                        <NoticeBox>
                            <div style={{ display: 'flex', flexDirection: 'columns', padding: '0.5rem 0.5rem 0.1rem 0.5rem' }}>
                                <Title>Study Summary</Title>
                                <EditBox>
                                    <img src={Edit} alt='수정' style={{ width: '12px', height: '12px;' }} />
                                </EditBox>
                            </div>
                            {studyData && studyData.home && (
                                <InputBox>
                                    {studyData.home.projectTabResponseDto.studySummary}
                                </InputBox>
                            )}
                        </NoticeBox>
                    </LeftBox>
                </ContainerBox>
            </FrameContainer >
        </>
    )
}
