import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import {
    FrameContainer,
    ContainerBox,
    StudyTitle,
    SubText,
    TextBox,
    SecondLine,
    SideMenuBar,
    Img,
    Container,
    CheckContainer,
} from './StudyPageCss.jsx';
import StudyContainer from './StudyPageItems/StudyBox/StudyContainer.jsx';
import MemberContainer from './StudyPageItems/MemberBox/MemberContainer.jsx';
import NoticeContainer from './StudyPageItems/NoticeBox/NoticeContainer.jsx';
import Clickhome from '../assets/Clickhome.png';
import Calender from '../assets/Calender.png';
import User from '../assets/User.png';
import List from '../assets/List.png';

export default function StudyHome() {
    const [studyData, setStudyData] = useState(null);

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
                    <CheckContainer>
                        <Img src={Clickhome} alt='홈' />
                    </CheckContainer>
                    <Container>
                        <Img src={Calender} alt='캘린더' />
                    </Container>
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
                    <StudyContainer />
                    {studyData && (
                        <SecondLine>
                            <MemberContainer />
                            <NoticeContainer />
                        </SecondLine>
                    )}
                </ContainerBox>
            </FrameContainer >
        </>
    )
}
