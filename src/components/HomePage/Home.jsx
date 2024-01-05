import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';

const HomeSection = styled.div``;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 1.5vh;
`;

const HomeBox = styled.div`
  width: 13vw;
  height: 13vw;
  border: 3px solid #b9d967;
  margin-right: 3vw;
  border-radius: 30px 30px 30px 30px;
`;

const AchivementSection = styled.div``;

const AchivementBox = styled.div`
  width: 45vw;
  height: 13vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
`;

export default function Home() {
  return (
    <PageFrame>
      <HomeSection>
        <Title>HOME</Title>
        <HomeBox></HomeBox>
      </HomeSection>
      <AchivementSection>
        <Title>ACHIVEMENT</Title>
        <AchivementBox></AchivementBox>
      </AchivementSection>
    </PageFrame>
  );
}
