import React from 'react'

import * as Styled from './styles'

const CreateFormContainer: React.FC = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default CreateFormContainer
