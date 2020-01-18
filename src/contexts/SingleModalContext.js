import constate from 'constate';
import { useState, useCallback } from 'react';

const useSingleModal = (params) => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleModal = useCallback(() => {
    setIsModalShowing((pre) => !pre);
  }, []);

  const closeModal = () => {
    setIsModalShowing(false);
  };

  const openModal = () => {
    setIsModalShowing(true);
  };

  const setContent = (content) => {
    setModalContent(content);
  };

  const toggleModalWithContent = useCallback((content) => {
    openModal();
    setContent(content);
  }, []);

  return {
    isModalShowing,
    toggleModal,
    modalContent,
    toggleModalWithContent,
  };
};

export const [
  SingleModalProvider,
  useIsModalShowing,
  useToggleModal,
  useModalContent,
  useToggleModalWithContent,
] = constate(
  useSingleModal,
  (value) => value.isModalShowing,
  (value) => value.toggleModal,
  (value) => value.modalContent,
  (value) => value.toggleModalWithContent,
);
