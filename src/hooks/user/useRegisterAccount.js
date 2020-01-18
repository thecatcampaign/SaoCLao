import { useState, useCallback } from 'react';
import { message } from 'antd';
import {
  myApiEndPoint,
  myApiAxiosInstance,
} from '../../constants/myApi.constant';
import { useAuth } from '../../contexts/AuthContext';
import { messages } from '../../constants/message.constant';
import { errorSelector } from '../../helpers/utils.helper';

// eslint-disable-next-line import/prefer-default-export
export const useRegisterAccount = () => {
  const { loginWithEmail } = useAuth();
  const [loading, setLoading] = useState(false);

  const registerAccount = useCallback(async (data) => {
    try {
      setLoading(true);
      await myApiAxiosInstance.post(
        myApiEndPoint.CREATE_NEW_ACCOUNT,
        data,
      );
      setLoading(false);
      loginWithEmail(data.email, data.password);
      message.success(messages.ACCOUNT_WAS_CREATED_SUCCESS);
    } catch (error) {
      setLoading(false);
      message.error(errorSelector(error));
    }
  }, []);
  return { registerAccount, loading };
};
