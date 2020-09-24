import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import CreateFormContainer from './../../components/CreateFormContainer/index'
import Input from './../../components/Input/index'
import CheckBox from './../../components/Checkbox/index'
import Button from './../../components/ForwardButton/index'

import api from './../../config/axios'

export default function Home() {
  const history = useHistory()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkBox, setCheckBox] = useState<boolean>(false)
  
  const [disabledButton, setDisabledButton] = useState<boolean>(false)

  async function handleButtonLogin() {
    setDisabledButton(true)
    await api.post('/auth/admin', {
      email: email,
      password: password
    })
      .then(response => {
        const token = response.data.token

        if (checkBox) {
          localStorage.setItem('token', token)
        } else {
          sessionStorage.setItem('token', token)
        }

        history.push('/eventos/criar')
      })
      .catch(error => {
        alert('Informações incorretas, por favor, verifique os dados')
        setDisabledButton(false)
      })
  }

  return (
    <>
    <Header />

    <Styled.Container>
      <CreateFormContainer>
        <Styled.FormTitle>Iniciar sessão</Styled.FormTitle>

        <Styled.FormContainer>
          <Input placeholder='seuEmail@mail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder='suaSenha123' value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        </Styled.FormContainer>

        <Styled.CheckBoxContainer>
          <CheckBox value={checkBox} onChange={() => setCheckBox(!checkBox)} />
          <Styled.CheckBoxText>Manter conectado?</Styled.CheckBoxText>
        </Styled.CheckBoxContainer>

        <Button disabled={disabledButton} onClick={handleButtonLogin} />

        <Styled.FailCredentialsButton>
          <Styled.FailCredentialsText>Não consigo autenticar</Styled.FailCredentialsText>
        </Styled.FailCredentialsButton>
      </CreateFormContainer>
    </Styled.Container>
    </>
  )
}
