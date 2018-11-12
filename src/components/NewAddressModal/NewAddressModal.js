import React, { Component } from 'react';
import { array, func, number, shape, object } from 'prop-types';
import { createPortal } from 'react-dom';
import { Container } from 'reactstrap';
import {
  NewAddressModalWrapper,
  NewAddressModalContainer
} from './NewAddressModal.styles';
import NewAddressModalWizard from './NewAddressModalWizard';

/** needs a unit test */
const modalRoot = document.getElementById('modal-root');

class NewAddressModal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      <NewAddressModalWrapper>
        <Container>
          <NewAddressModalContainer>
            <NewAddressModalWizard {...this.props} />
          </NewAddressModalContainer>
        </Container>
      </NewAddressModalWrapper>,
      this.el
    );
  }
}

NewAddressModal.propTypes = {
  goToNextModalStep: func,
  places: array,
  closeModal: func,
  handleMapInstance: func,
  currentMapInfo: shape({
    map: object,
    maps: object
  }),
  modalStepIndex: number,
  customPlace: object // make a type for this
};

export default NewAddressModal;
