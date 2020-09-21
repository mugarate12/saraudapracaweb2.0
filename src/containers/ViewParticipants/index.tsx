import React from 'react'

import * as Styled from './styles'

import TableContainer from './../../components/TableContainer/index'
import TableHeader from './../../components/TableHeader/index'

interface ViewParticipantsInterface {
  participants: number[];
}

const ViewParticipants: React.FC<ViewParticipantsInterface> = ({ participants }) => {
  function renderParticipants() {
    return participants.map((participant, index) => {
      return (
        <Styled.GridBody key={index} >
          <Styled.GridContent>Fulano de tal</Styled.GridContent>
          <Styled.GridContent>meuemail@mail.com</Styled.GridContent>
          <Styled.GridContent>Recitar</Styled.GridContent>
          <Styled.GridContent>997918631</Styled.GridContent>
          <Styled.GridContent>meuUsername</Styled.GridContent>
        </Styled.GridBody>
      )
    })
  }
  
  return (
    <TableContainer>
      <TableHeader type='participants' />

      <Styled.GridContainer>
        <Styled.GridBody>
          <Styled.GridTitle>Nome</Styled.GridTitle>
          <Styled.GridTitle>Email</Styled.GridTitle>
          <Styled.GridTitle>Atividade</Styled.GridTitle>
          <Styled.GridTitle>Whatsapp</Styled.GridTitle>
          <Styled.GridTitle>Instagram</Styled.GridTitle>
        </Styled.GridBody>

        {renderParticipants()}

      </Styled.GridContainer>
      
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

export default ViewParticipants
