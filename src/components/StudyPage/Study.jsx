import React from 'react'
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar';
import { FrameContainer, ContainerBox, StudyTitle, SubText, TextBox } from './StudyPageCss.jsx';
import StudyContainer from './StudyPageItems/StudyBox/StudyContainer.jsx';
import MemberContainer from './StudyPageItems/MemberBox/MemberContainer.jsx';
import CompletionContainer from './StudyPageItems/CompletionBox/CompletionContainer.jsx';

export default function Study() {
    return (
        <>
            <NavigationBar />
            <FrameContainer>
                <ContainerBox>
                    <TextBox>
                        <StudyTitle>맘모스터디</StudyTitle>
                        <SubText>간단한 스터디 설명입니다. 약간 두줄을 채워 보려고 했지 이게 생각보다 쓸말이 어떻게 해야하는지 모르겠어요. 이렇게 가지 스터디를 설명할 정도의 구간이 아무래도 필요하겠죠 ?가나다라마바사 아자차카 타파하 두근두근 두두근근 뿌슝빠숑</SubText>
                    </TextBox>
                    <StudyContainer />
                    <MemberContainer />
                    <CompletionContainer>완수박스</CompletionContainer>
                </ContainerBox>
            </FrameContainer>

        </>
    )
}
