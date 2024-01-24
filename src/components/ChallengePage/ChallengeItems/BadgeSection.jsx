import styled from 'styled-components';


const BadgeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 82vw;
`;

const BadgeCard = styled.div`
  width: 8vw;
  height: 9vw;
  margin: 2.5vw;
  margin-left: 3vw;
  background-color: #D9D9D9;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  
  &.selectedBadge {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 3px solid transparent;
    background-image: linear-gradient(#fff, #fff), linear-gradient(to bottom, #A6E087, #96A3D4, #AEC0FF);
    border-radius: 10px;
    background-origin: border-box;
    background-clip: content-box,border-box;
    background-color: #D9D9D9;
  }

`;

export default function BadgeSection() {
    return (
        <BadgeContainer>
            <BadgeCard />
            <BadgeCard className="selectedBadge"/>
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
            <BadgeCard />
        </BadgeContainer>
    );
}