import React from 'react';
import { Button } from 'antd';
import { useToggleModalWithContent } from '../../contexts/SingleModalContext';
import RegisterModal from './Register.modal';


export default function Register() {
  const
    toggleModalWithContent = useToggleModalWithContent();
  return (
    <div>
      <Button type="primary" className="btn-soundClound" onClick={() => toggleModalWithContent(<RegisterModal />)}>Register</Button>
    </div>
  );
}
