import styled from 'styled-components';
import NavigationBar from './pageFrameItems/NavigationBar';
import { Background } from './pageFrameItems/PageFrameCss';
import PropTypes from 'prop-types';

const PageContainer = styled.div`
  display: flex;
  position: absolute;
  text-align: center;
`;

export default function PageFrame(props) {
  return (
    <>
      <NavigationBar />
      <PageContainer>
        <Background>{props.children}</Background>
      </PageContainer>
    </>
  );
}

PageFrame.propTypes = {
  children: PropTypes.node.isRequired,
};
