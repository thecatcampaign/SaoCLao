/* eslint-disable import/prefer-default-export */
import { useState, useCallback } from 'react';
import { message } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { messages } from '../../constants/message.constant';

export const useSigninAccount = () => {
  const { loginWithEmail } = useAuth();
  const [loading, setLoading] = useState(false);

  const signinAccount = useCallback(async (data) => {
    try {
      setLoading(true);
      await loginWithEmail(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error(messages.INCORRECT_USERNAME_PASSWORD_ERROR);
    }
  }, []);
  return { signinAccount, loading };
};
