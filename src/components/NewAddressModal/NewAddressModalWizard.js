import React from 'react';
import { array, func, number, object, shape } from 'prop-types';
import NewAddressModalWizardStepOne from './NewAddressModalWizardStepOne';
import NewAddressModalWizardStepTwo from './NewAddressModalWizardStepTwo';

const NewAddressModalWizard = props => {
  return (
    <>
      {props.modalStepIndex === 0 && (
        <NewAddressModalWizardStepOne {...props} />
      )}
      {props.modalStepIndex === 1 && (
        <NewAddressModalWizardStepTwo {...props} />
      )}
    </>
  );
};

NewAddressModalWizard.propTypes = {
  places: array,
  goToNextModalStep: func,
  closeModal: func,
  handleMapInstance: func,
  currentMapInfo: shape({
    map: object,
    maps: object
  }),
  modalStepIndex: number,
  customPlace: object // make a type for this
};

export default NewAddressModalWizard;
