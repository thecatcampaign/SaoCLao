import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { RHFInput } from 'react-hook-form-input';
import Register from './Register';
import { useSigninAccount } from '../../hooks/user/useSignInAccount';

export default function LoginModal() {
  const {
    register, handleSubmit, errors, setValue, reset,
  } = useForm();
  const { loading, signinAccount } = useSigninAccount();
  const onSubmit = (data) => signinAccount(data);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className=" p-4 ">
        <Form.Item>
          <RHFInput
            as={(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
              />
            )}
            rules={{
              required: { value: true, message: 'Please Type An Email' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address',
              },
            }}
            name="email"
            register={register}
            setValue={setValue}
          />
          {errors.email && errors.email.message}
        </Form.Item>
        <Form.Item>
          <RHFInput
            as={(
              <Input.Password
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="input password"
              />
            )}
            rules={{
              required: { value: true, message: 'Please Type A Password' },
            }}
            name="password"
            register={register}
            setValue={setValue}
          />
          {errors.password && errors.password.message}
        </Form.Item>
        <Form.Item>
          <div className=" flex justify-between">
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className=" w-full"
            loading={loading}
          >
            Log in
          </Button>
          Or
          {' '}
          <Register />
        </Form.Item>
      </Form>
    </div>
  );
}
