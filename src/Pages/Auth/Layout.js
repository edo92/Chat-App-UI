import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as logo } from 'assets/logo.svg';
import { borderDynamic } from 'Styled/dynamic';
import { toggleTheme } from 'Store/action/ui';

const Wrapper = styled.div`
  ${borderDynamic};
  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  width: 330px;
  height: 560px;
  margin: 100px auto;
  text-align: center;
`;

const Logo = styled.div`
  background-color: white;
  width: 63px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: -100px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const Icon = styled(logo)`
  overflow: hidden;
  vertical-align: middle;
`;

const Title = styled.h5`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const AuthLayout = ({
  toggleTheme,
  title,
  children,
}) => {
  useEffect(() => {
    toggleTheme(false);
  });

  return (
    <div>
      <Wrapper>
        <Logo>
          <Icon />
        </Logo>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </div>
  );
};

const mapDispatchToProsp = (dispatch) => {
  return {
    toggleTheme: (mode) => dispatch(toggleTheme(mode)),
  };
};

export default connect(
  null,
  mapDispatchToProsp,
)(AuthLayout);
