import React from 'react';
import Modal from 'Components/Modal';
import SettingsMenu from './menus/settings';

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
          <SettingsMenu />
        )}
      </>
    </Modal>
  </div>
);

export default ModalMenu;
