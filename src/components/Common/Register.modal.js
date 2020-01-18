import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { RHFInput } from 'react-hook-form-input';
import { useRegisterAccount } from '../../hooks/user/useRegisterAccount';
import Login from './Login';

export default function RegisterModal() {
  const {
    register, handleSubmit, errors, setValue, reset,
  } = useForm();
  const { loading, registerAccount } = useRegisterAccount();

  const onSubmit = (data) => {
    registerAccount(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className=" p-4 ">
        <Form.Item>
          <RHFInput
            as={(
              <Input
                prefix={
                  <Icon type="name" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Name"
              />
            )}
            rules={{ required: 'Your name is required' }}
            name="name"
            register={register}
            setValue={setValue}
          />
          {errors.name && errors.name.message}
        </Form.Item>

        <Form.Item>
          <RHFInput
            as={(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
            rules={{ required: 'Your Username is required' }}
            name="username"
            register={register}
            setValue={setValue}
          />
          {errors.username && errors.username.message}
        </Form.Item>

        <Form.Item>
          <RHFInput
            as={(
              <Input
                prefix={
                  <Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
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
                placeholder="Password"
              />
            )}
            rules={{
              required: { value: true, message: 'Please Type An Password' },
              minLength: {
                value: 6,
                message: 'too short',
              },
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
            className=" w-full btn-soundClound"
            loading={loading}
          >
            Register
          </Button>
          Or
          {' '}
          <Login />
        </Form.Item>
      </Form>
    </div>
  );
}
