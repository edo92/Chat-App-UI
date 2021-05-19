import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import { rotate } from 'Styled/anim';
import {
  cursorDynamic,
  borderDynamic,
  bgColorDynamic,
} from 'Styled/dynamic';

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

const Indicator = styled.div.attrs(({ active }) => ({
  activebg: active,
  typebg: 'base',
}))`
  ${borderDynamic};
  ${bgColorDynamic};

  width: 1rem;
  height: 1rem;

  position: absolute;
  top: -1px;
  border-radius: 0.2em;

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
          active={state}
          disabled={disabled}
          value={value || state}
          onChange={handleOnChange}
        />
        <Indicator disabled={true} active={state} />
      </Label>
    );
  },
);

export default Checkbox;
