import React from 'react'

import * as Styled from './styles'

import TableContainer from './../../components/TableContainer/index'
import TableHeader from './../../components/TableHeader/index'

interface ViewScheduleParticipantsInterface {
  participants: number[];
}

const ViewScheduleParticipants: React.FC<ViewScheduleParticipantsInterface> = ({ participants }) => {
  function renderParticipants() {
    return participants.map((participant, index) => {
      return (
        <Styled.GridContentContainer key={index} >
          <Styled.GridContent>João</Styled.GridContent>
          <Styled.GridContent>Cantar</Styled.GridContent>
          <Styled.GridContent>Hora</Styled.GridContent>
        </Styled.GridContentContainer>
      )
    })
  }
  
  return (
    <TableContainer>
      <TableHeader type='schedule' />

      <Styled.ContentContainer>
        <Styled.GridTitleContainer>
          <Styled.GridTitleContent>Nome</Styled.GridTitleContent>
          <Styled.GridTitleContent>Atividade</Styled.GridTitleContent>
          <Styled.GridTitleContent>Hora</Styled.GridTitleContent>
        </Styled.GridTitleContainer>

        {renderParticipants()}
      </Styled.ContentContainer>

      <Styled.PagesIconsContainer>
        <Styled.GenericButton>
          <Styled.ArrowLeftIcon />
        </Styled.GenericButton>

        <Styled.GenericButton>
          <Styled.ArrowRightIcon />
        </Styled.GenericButton>
      </Styled.PagesIconsContainer>

    </TableContainer>
  )
}

export default ViewScheduleParticipants
