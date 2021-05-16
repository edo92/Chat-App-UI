import React from 'react';
import AuthLayout from './Layout';

import { Form } from 'Styled/base';

const LoginPage = () => {
  const onSubmit = () => {};

  return (
    <AuthLayout title={'Sign In'}>
      <Form onSubmit={onSubmit}>
        <h1>Form Content</h1>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
