/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { SIZES } from './constats'

import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size = 'medium' }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value || 0}
      size={size}
    >
      <BarWrapper size={size}>
        <InnerBar value={value} size={size} />
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: ${({ size }) => SIZES[size].radius}px;
  height: ${({ size }) => SIZES[size].height}px;
  padding: ${({ size }) => SIZES[size].padding}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const BarWrapper = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;

  /* To hide innerBar right angles when it comes close to the end of the Wrapper */
  overflow: hidden;
`

const InnerBar = styled.div`
  width: ${p => p.value || 0}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
