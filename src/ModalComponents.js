import React from 'react';
import { connect } from 'react-redux';

const ReactivateModal = (props) => (
  <div>
    <h1>I am the reactivate modal.</h1>
    <p>{props.message}</p>
  </div>
);

const DeactivateModal = (props) => (
  <div>
    <h1>I am the deactivate modal.</h1>
    <p>{props.message}</p>
  </div>
);
const HappyModal = (props) => (
  <div>
    <h1>I am the happy modal.</h1>
    <p>{props.message}</p>
  </div>
);

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
