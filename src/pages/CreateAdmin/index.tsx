import React, { useState } from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import CreateFormContainer from './../../components/CreateFormContainer/index'
import Input from './../../components/Input'
import Button from './../../components/ForwardButton/index'

export default function CreateAdmin() {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [disabledButton] = useState<boolean>(false)

  function handleButton() {
    // setDisabledButton(true)

    if (!!email && !!name && !!password) {
      // setDisabledButton(false)
      alert('ok')
    } else {
      alert('Por favor, preencha todos os campos')
    }
  }

  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        <CreateFormContainer>
          <Styled.FormTitle>Criar Administrador</Styled.FormTitle>

          <Styled.FormContainer>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='adminemail@mail.com' />
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='nome do admin' />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='senha' type='password' />
          </Styled.FormContainer>

          <Button disabled={disabledButton} onClick={() => handleButton()} />
        </CreateFormContainer>
      </Styled.Container>
    </>
  )
}
