import React from 'react'

import * as Styled from './styles'

const TableContainer: React.FC = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default TableContainer
