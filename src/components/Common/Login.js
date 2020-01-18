import React from 'react';
import { Button } from 'antd';
import LoginModal from './LoginModal';
import { useToggleModalWithContent } from '../../contexts/SingleModalContext';

export default function Login() {
  const
    toggleModalWithContent = useToggleModalWithContent();
  return (
    <div>
      <Button className=" mr-2" type="primary" onClick={() => toggleModalWithContent(<LoginModal />)}>Login</Button>
    </div>
  );
}
