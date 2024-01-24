import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';
import SelectSection from './ChallengeItems/SelectSection';
import BadgeSection from './ChallengeItems/BadgeSection';
import ChangeButton from './ChallengeItems/ChangeButton';

const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 22vw;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 10vw;
`;



export default function Challenge() {
    return (
        <PageFrame>
            <Top>
                <SelectSection />
            </Top>
            <Middle>
                <BadgeSection />
            </Middle>
            <Bottom>
                <ChangeButton></ChangeButton>
            </Bottom>
        </PageFrame>
    );
}
