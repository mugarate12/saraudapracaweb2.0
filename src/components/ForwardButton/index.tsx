import React from 'react'

import * as Styled from './styles'

interface ForwardButtonInterface {
  onClick?: () => void;
  disabled: boolean;
}
const ForwardButton: React.FC<ForwardButtonInterface> = ({ disabled, onClick }) => {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} >
      <Styled.Icon />
    </Styled.Button>
  )
}

export default ForwardButton
