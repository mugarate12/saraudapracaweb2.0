import React from 'react'

import * as Styled from './styles'

import Header from './../../components/Header/index'
import ViewEventsPainel from './../../containers/ViewEventsPainel/index'

export default function ViewEvents() {
  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        <ViewEventsPainel />
      </Styled.Container>
    </>
  )
}
