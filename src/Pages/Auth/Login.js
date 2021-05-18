import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

import Linkto from 'Components/Link';
import Checkbox from 'Components/Checkbox';
import ButtonBase from 'Components/Button';

import { Form } from 'Styled/base';
import { Input as FormInput } from 'Styled/shared';
import { fontDynamic } from 'Styled/dynamic';

const FormItem = styled.div`
  display: flex;
  margin-top: 1.45rem;
  justify-content: space-between;
`;

const Input = styled(FormInput)`
  height: 35px;
`;

const Link = styled(Linkto).attrs({
  active: true,
})`
  ${fontDynamic};
  font-size: 13.3px;
`;

const Button = styled(ButtonBase)`
  text-align: center;
  width: 100%;
  padding: 8px 0;
  font-size: 14px;
`;

// const ButtonLink = styled(Linkto)`
//   ${baseButton};
//   ${borderDynamic};
// `;

const LoginPage = () => {
  // handlers

  const checkbox = () => {};
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      'rememberme',
      e.target.elements.rememberme.value,
    );
  };

  return (
    <Layout title={'Sign In'}>
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
          <Checkbox
            onChange={checkbox}
            name={'rememberme'}
            label={'Remember me'}
          />
          <Link to="/reset-password">
            Reset password
          </Link>
        </FormItem>
        <FormItem>
          <Button
            size="sm"
            title={'Login'}
            color={'#fff'}
            type={'primary'}
          />
        </FormItem>
      </Form>
      <div>
        {/* <TextSecondary>
          Don't have an account ?
        </TextSecondary> */}

        {/* <ButtonLink to={'/signup'}>
          Register now
        </ButtonLink> */}
      </div>
    </Layout>
  );
};

export default LoginPage;
