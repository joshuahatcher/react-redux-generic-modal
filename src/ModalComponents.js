import React from 'react';
import { connect } from 'react-redux';

const ReactivateModal = () => {
  return <p>I am the reactivate modal.</p>
};

const DeactivateModal = () => {
  return <p>I am the deactivate modal.</p>  
};
const HappyModal = () => {
  return <p>I am the happy modal.</p>
};

const MODAL_COMPONENTS = {
  REACTIVATE: ReactivateModal,
  DEACTIVATE: DeactivateModal,
  HAPPY: HappyModal
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />
};

export default connect(state => state.modal)(ModalRoot);
