import React, { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { rotate } from 'Styled/anim';
import { activePrimary } from 'Styled/colors';
import {
  borderDynamic,
  cursorDynamic,
} from 'Styled/dynamic';

const active = css`
  ${({ checked }) => (checked ? activePrimary : '#fff')};
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  ${cursorDynamic};
  position: relative;
  display: flex;
`;

const Indicator = styled.div`
  ${borderDynamic};
  background: ${active};

  width: 1rem;
  height: 1rem;

  position: absolute;
  top: -1px;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    ${rotate};
    display: block;
    top: 1px;
    left: 5px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 0.17em 0.18em 0;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

const LabelText = styled.span`
  position: relative;
  font-size: 13.33px;
  margin-left: 1.5rem;
  display: flex;
`;

const Checkbox = memo(
  ({
    value,
    checked,
    onChange,
    name,
    id,
    label,
    disabled,
  }) => {
    const [state, setState] = useState(false);

    useEffect(() => {
      let current =
        checked === undefined ? state : checked;
      setState(current);
    }, [checked, state]);

    const handleOnChange = () => {
      !checked && setState(!state);
      onChange && onChange(state);
    };

    return (
      <Label htmlFor={id} disabled={disabled}>
        <LabelText>{label}</LabelText>
        <Input
          id={id}
          type="checkbox"
          name={name}
          value={value || state}
          checked={state}
          disabled={disabled}
          onChange={handleOnChange}
        />
        <Indicator checked={state} />
      </Label>
    );
  },
);

export default Checkbox;
