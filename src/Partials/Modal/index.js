import React from 'react';
import Modal from 'Components/Modal';

const ModalMenu = ({ modal, toggle }) => (
  <div>
    <Modal
      active={modal.isOpen}
      toggle={toggle}
      title={modal.activeMenu}
      icon={modal.activeMenu}
    >
      <>
        {modal.activeMenu === 'Settings' && (
          <h1>hello world</h1>
        )}
      </>
    </Modal>
  </div>
);

export default ModalMenu;
