import styled from 'styled-components';

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const TierBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12vw;
`;


const BadgeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  padding-right: 10vw;
`;


const ChallengeFont = styled.p`
  &.tier {
    font-weight: lighter;
    font-size: 45px;
    padding-left: 35px;
    padding-bottom: 50px;
  }

  &.percent {
    font-size: 15px;
    font-weight: bolder;
    padding-bottom: 20px;
    
  }
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
`;

const Tier = styled.div`
  display: flex;
  width: 10.5vw;
  height: 12.5vw;
  background-color: #D9D9D9;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const LevelBar = styled.div`
  width: 10vw;
  height: 0.7vw;
  background-color: #B9D967;
  border-radius: 10px;
  margin-left: 2vw;
`;

const Badge = styled.div`
  display: flex;
  width: 8vw;
  height: 8vw;
  margin: 2.5vw;
  margin-left: 3vw;
  background-color: #D9D9D9;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export default function SelectSection() {
    return (
        <SelectContainer>
            <TierBox>
                <Tier />
                <RowBox>
                    <ChallengeFont className="percent">사용자 상위 20%</ChallengeFont>
                    <ChallengeFont className="tier">GOLD III</ChallengeFont>
                    <LevelBar />
                </RowBox>
            </TierBox>
            <BadgeBox>
                <Badge />
            </BadgeBox>
        </SelectContainer>
    );
}