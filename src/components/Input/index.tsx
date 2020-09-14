import React, { ChangeEvent } from 'react'

import * as Styled from './styles'

interface InputProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, type }) => {
  return <Styled.Input placeholder={placeholder} value={value} onChange={onChange} type={type} />
}

export default Input
