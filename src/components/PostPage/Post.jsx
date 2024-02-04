import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.div`
  margin-top: 2vw;
  margin-bottom: 2vw;
  border-radius: 25px;

  width: 50vw;
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
  background-color: white;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2vw;
  margin-top: 1vw;
  margin-left: 2vw;
  margin-right: 2vw;
`;

const PageTitle = styled.p`
  font-family: 'PretendardBold';
  font-size: 25px;
`;

const PostInfo = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  margin-top: 2vw;
  padding-left: 1vw;
  padding-right: 1vw;
  height: 2vw;
`;

const TitleLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 3px 5px 0px rgba(160, 160, 160, 0.5);
`;

const Bottom = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
`;

const ImgBox = styled.div`
  display: flex;
  margin-top: 2vw;
  height: 15vw;
  white-space: nowrap; // 가로 스크롤의 핵심
  overflow-x: auto; // 가로 스크롤의 핵심

  &::-webkit-scrollbar {
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    background-color: #b9d967;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: #b9d967;
    height: 10px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Content = styled.div`
  margin-top: 2vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(160, 160, 160, 0.5);
  height: 18vw;
  padding: 1vw;
`;

const Img = styled.img`
  border: 1px solid black;
  height: 14vw;
  min-width: 14vw;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2.5vw;
  margin-bottom: 2vw;
`;

const Button = styled.button`
  cursor: pointer;
  font-family: 'PretendardSemiBold';
  font-size: 16px;
  box-shadow: 0px 0px 5px 1px rgba(160, 160, 160, 0.5);
  border: 1px solid rgba(160, 160, 160, 0.5);
  border-radius: 10px;
  margin-left: 4vw;
  margin-right: 4vw;
  width: 8vw;
  height: 2vw;
  background-color: white;
`;

export default function Post() {
  return (
    <PageFrame>
      <PageContainer>
        <PostContainer>
          <Top>
            <PageTitle>공지사항</PageTitle>
            <PostInfo>김경규&emsp;2024-02-04</PostInfo>
          </Top>
          <Bottom>
            <Title>맘모스입니다.</Title>
            <TitleLine />
            <ImgBox>
              <Img />
              <Img />
              <Img />
            </ImgBox>
            <Content>
              맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.맘모스입니다.
            </Content>
            <ButtonBox>
              <Button>돌아가기</Button>
              <Button>수정</Button>
            </ButtonBox>
          </Bottom>
        </PostContainer>
      </PageContainer>
    </PageFrame>
  );
}
