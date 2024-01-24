import PropTypes from 'prop-types';

import {
  ModalContainer,
  Button,
  Section,
  Header,
  Main,
  Footer,
  Tab,
} from './ModalCss';

export default function Modal(props) {
  const { open, close, header } = props;
  let input;
  if (props.isLeft) input = 'id';
  else input = 'pwd';

  return (
    <div>
      {open ? (
        <ModalContainer className={open ? 'openModal modal' : 'modal'}>
          <Section>
            <Header>
              {header}
              {!props.isInfoModal && (
                <>
                  <Tab
                    className="name"
                    isselected={props.isLeft.toString()}
                    onClick={() => props.setIsLeft(true)}
                  >
                    아이디
                  </Tab>
                  <Tab
                    isselected={(!props.isLeft).toString()}
                    onClick={() => props.setIsLeft(false)}
                  >
                    비밀번호
                  </Tab>
                </>
              )}
            </Header>
            <Main>{props.children}</Main>
            <Footer>
              {!props.isInfoModal && (
                <Button onClick={() => props.AccountChangeHandler(input)}>
                  수정
                </Button>
              )}
              {props.isInfoModal && (
                <Button onClick={props.InfoChangeHandler}>변경</Button>
              )}
              <Button className="close" onClick={close}>
                취소
              </Button>
            </Footer>
          </Section>
        </ModalContainer>
      ) : null}
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  AccountChangeHandler: PropTypes.func.isRequired,
  InfoChangeHandler: PropTypes.func.isRequired,
  isLeft: PropTypes.bool.isRequired,
  setIsLeft: PropTypes.func.isRequired,
  isInfoModal: PropTypes.bool.isRequired,
};
