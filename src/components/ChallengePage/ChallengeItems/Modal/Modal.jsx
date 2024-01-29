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
    <div onClick={close}>
      {open ? (
        <ModalContainer className={open ? 'openModal modal' : 'modal'}>
          <Section>
            <Header>{header}</Header>
            <Main>{props.children}</Main>
            <Footer>
              <Button className="close" onClick={close}>
                확인
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
};
