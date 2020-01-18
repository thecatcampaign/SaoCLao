import React from 'react';
import { Modal, Button } from 'antd';
import {
  useIsModalShowing,
  useToggleModal,
  useModalContent,
} from '../../contexts/SingleModalContext';

export default function DynamicModal() {
  const isModalShowing = useIsModalShowing();
  const toggleModal = useToggleModal();
  const modalContent = useModalContent();

  return (
    <div>
      <Modal
        style={{ top: 20 }}
        visible={isModalShowing}
        onOk={toggleModal}
        onCancel={toggleModal}
        footer={null}
        destroyOnClose // important
      >
        {modalContent}
      </Modal>
    </div>
  );
}
