import React, { useState } from 'react';
import styled from 'styled-components';
import AuthLayout from './Layout';

import ButtonBase from 'Components/Button';
import Linkto from 'Components/Link';

import { Form } from 'Styled/base';
import { Input as FormInput } from 'Styled/shared';
import { border } from 'Styled/colors';

const FormItem = styled.div`
  margin-top: 1.45rem;
`;

const Input = styled(FormInput)`
  border: 1px solid ${border};
  height: 35px;
`;

const Button = styled(ButtonBase)`
  text-align: center;

  width: 100%;
`;

const Link = styled(Linkto)`
  font-size: 13.3px;
`;

const LoginPage = () => {
  // handlers

  const checkbox = () => {};
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('email', e.target.elements.email.value);
    console.log(
      'password',
      e.target.elements.password.value,
    );
  };

  return (
    <AuthLayout title={'Sign In'}>
      <Form onSubmit={onSubmit}>
        <FormItem>
          <Input name="email" placeholder="Email" />
        </FormItem>
        <FormItem>
          <Input
            name="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <Link to="/reset-password">
            Reset password
          </Link>
        </FormItem>
        <FormItem>
          <Button title="Register now" />
        </FormItem>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
