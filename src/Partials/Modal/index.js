import React, { memo } from 'react';
import Modal from 'Components/Modal';
import SettingsMenu from './menus/Settings';

const ModalMenu = memo(({ modal, toggle }) => (
  <Modal
    toggle={toggle}
    active={modal.isOpen}
    icon={modal.activeMenu}
    title={modal.activeMenu}
  >
    <>
      {modal.activeMenu === 'Settings' && (
        <SettingsMenu />
      )}
    </>
  </Modal>
));

export default ModalMenu;
