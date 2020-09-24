import React, { useState } from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import CreateFormContainer from './../../components/CreateFormContainer/index'
import Input from './../../components/Input/index'
import Button from './../../components/ForwardButton/index'

import IsLogged from './../../utils/islogged'

export default function CreateEvent() {
  const [eventName, setEventName] = useState<string>('')
  const [eventDate, setEventDate] = useState<string>('')
  const [eventHour, setEventHour] = useState<string>('')

  const [disabledButton, setDisabledButton] = useState<boolean>(false)

  IsLogged()

  function handleButton() {
    setDisabledButton(true)

    if (!!eventName && !!eventDate && !!eventHour) {
      alert('ok')
      setDisabledButton(false)
    } else {
      alert('Por favor, preencha todos os campos')
      setDisabledButton(false)
    }
  }

  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        <CreateFormContainer>
          <Styled.FormTitle>Criar Evento</Styled.FormTitle>

          <Styled.FormContainer>
            <Input placeholder='Nome do Evento' value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <Input placeholder='Data do Evento' value={eventDate} onChange={(e) => setEventDate(e.target.value)} type='date' />
            <Input placeholder='Data do Evento' value={eventHour} onChange={(e) => setEventHour(e.target.value)} type='time' />
          </Styled.FormContainer>

          <Button disabled={disabledButton} onClick={() => handleButton()} />
        </CreateFormContainer>
      </Styled.Container>
    </>
  )
}
