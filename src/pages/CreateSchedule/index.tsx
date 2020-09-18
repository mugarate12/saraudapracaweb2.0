import React from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import ContainerPainel from './../../components/TableContainer/index'
import ContainerHeader from './../../components/TableHeader/index'
import Input from './../../components/Input/index'

export default function CreateSchedule() {
  function renderParticipants() {
    const array = [1, 2, 3, 4]

    return array.map((participant, index) => {
      return (
        <Styled.ContentGridContainer key={index} >
          <Styled.ParticipantContentContainer >
            <Styled.ParticipantContent>João</Styled.ParticipantContent>
          </Styled.ParticipantContentContainer>

          <Styled.ParticipantContentContainer >
            <Styled.ParticipantContent>Cantar</Styled.ParticipantContent>
          </Styled.ParticipantContentContainer>

          <Input placeholder='informe a hora' />
        </Styled.ContentGridContainer>
      )
    })
  }

  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        <ContainerPainel>
          <ContainerHeader type='participants' />

          <Styled.ContentContainer>
            <Styled.ContentGridTitleContainer>
              <Styled.GridTitle>Nome</Styled.GridTitle>
              <Styled.GridTitle>Atividade</Styled.GridTitle>
              <Styled.GridTitle>Hora</Styled.GridTitle>
            </Styled.ContentGridTitleContainer>

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

          <Styled.ButtonContainer>
            <Styled.ConfirmButton>
              <Styled.ArrowRightIconButton />
            </Styled.ConfirmButton>
          </Styled.ButtonContainer>
        </ContainerPainel>
      </Styled.Container>
    </>
  )
}
