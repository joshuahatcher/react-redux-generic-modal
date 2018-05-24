export function showModal(modalType, modalProps) {
  return {
    type: 'SHOW_MODAL',
    modalType,
    modalProps
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
