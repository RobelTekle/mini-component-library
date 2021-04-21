import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const iconSize = size === 'small' ? 16 : 24
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper size={iconSize}>
        <Icon id={icon} strokeWidth={1} size={iconSize}  />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        size={size}
        width={width}
        {...delegated}
      />
    </Wrapper>
  )
};


const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 3px;
  margin: auto;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  pointer-events: none;
  color: ${COLORS.gray700};
`

const Input = styled.input`
  background-color: transparent;
  font-size: ${({ size }) => size === 'small' ? 14 : 18}px;
  border: none;
  border-bottom: ${({ size }) => size === 'small' ? 1 : 2}px solid ${COLORS.black};
  height: ${({ size }) => size === 'small' ? 24 / 16 : 36 / 16}rem;
  padding-left: ${({ size }) => size === 'small' ? 24 : 36}px;
  width: ${({ width }) => width}px;

  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`

const Wrapper  =styled.div`
  position: relative;
  width: max-content;

  &:hover {
    ${IconWrapper}, ${Input} {
      color: ${COLORS.black};
    }
  }
`

export default IconInput;
