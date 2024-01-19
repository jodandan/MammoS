import PropTypes from 'prop-types';

import {
  ModalContainer,
  Button,
  Section,
  Header,
  Main,
  Footer,
} from './ModalCss';

export default function Modal(props) {
  const { open, close, header } = props;

  return (
    <div>
      {open ? (
        <ModalContainer className={open ? 'openModal modal' : 'modal'}>
          <Section>
            <Header>{header}</Header>
            <Main>{props.children}</Main>
            <Footer>
              <Button onClick={props.SubmitHandler}>생성</Button>
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
  SubmitHandler: PropTypes.func.isRequired,
};
