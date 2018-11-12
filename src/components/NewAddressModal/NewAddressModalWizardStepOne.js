import React from 'react';
import { func, number } from 'prop-types';
import {
  NewAddressModalTextCol,
  NewAddressModalButtonCol
} from './NewAddressModal.styles';
import { Button, Row } from 'reactstrap';

const NewAddressModalWizardStepOne = ({
  closeModal,
  goToNextModalStep,
  modalStepIndex
}) => {
  return (
    <>
      <Row>
        <NewAddressModalTextCol>
          <p className="lead">
            The address you entered is not a known restaurant.
          </p>
        </NewAddressModalTextCol>
      </Row>
      <Row>
        <NewAddressModalTextCol>
          <p className="lead">
            Would you like to add it as favorite restaurant anyways?
          </p>
        </NewAddressModalTextCol>
      </Row>
      <Row>
        <NewAddressModalButtonCol>
          <Button color="danger" onClick={closeModal}>
            No
          </Button>
        </NewAddressModalButtonCol>
        <NewAddressModalButtonCol>
          <Button color="success" onClick={goToNextModalStep}>
            Yes
          </Button>
        </NewAddressModalButtonCol>
      </Row>
    </>
  );
};

NewAddressModalWizardStepOne.propTypes = {
  modalStepIndex: number,
  closeModal: func,
  goToNextModalStep: func
};

export default NewAddressModalWizardStepOne;
