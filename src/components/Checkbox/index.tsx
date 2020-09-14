import React, { ChangeEvent } from 'react'

import * as Styled from './styles'

interface CheckBoxInterface {
  value?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxInterface> = ({ value, onChange }) => {
  return <Styled.Input defaultChecked={value} onChange={onChange} />
}

export default CheckBox
