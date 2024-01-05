import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';

const HomeSection = styled.div``;

const Title = styled.h2``;

const HomeBox = styled.div`
  width: 10vw;
  border: 4px solid black;
  border-radius: 30px 30px 30px 30px;
  margin-right: 10vw;
`;

const AchivementSection = styled.div``;

const AchivementBox = styled.div`
  width: 40vw;
  border: 4px solid black;
  border-radius: 30px 30px 30px 30px;
`;

export default function Home() {
  return (
    <PageFrame>
      <HomeSection>
        <Title>Home</Title>
        <HomeBox>hello</HomeBox>
      </HomeSection>
      <AchivementSection>
        <Title>Achivement</Title>
        <AchivementBox>hello</AchivementBox>
      </AchivementSection>
    </PageFrame>
  );
}
