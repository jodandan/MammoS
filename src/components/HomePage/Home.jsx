import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';

const HomeSection = styled.div`
  background-color: red;
`;

const AchivementSection = styled.div`
  background-color: blue;
`;

export default function Home() {
  return (
    <PageFrame>
      <HomeSection>하이요</HomeSection>
      <AchivementSection>하이요2</AchivementSection>
    </PageFrame>
  );
}
