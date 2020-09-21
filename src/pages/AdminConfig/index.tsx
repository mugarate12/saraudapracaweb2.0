import React from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import TableContainer from './../../components/TableContainer/index'
import TableHeader from './../../components/TableHeader/index'
import Input from './../../components/Input/index'

export default function AdminConfig() {
  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        <TableContainer>
          <TableHeader type='admin' />

          <Styled.LiceContentContainer>
            <Styled.InputContainer>
              <Input placeholder='email' />
            </Styled.InputContainer>

            <span></span>

            <Styled.Button >
              <Styled.Icon />
            </Styled.Button>
          </Styled.LiceContentContainer>

          <Styled.LiceContentContainer>
            <Styled.InputContainer>
              <Input placeholder='name' />
            </Styled.InputContainer>

            <span></span>

            <Styled.Button >
              <Styled.Icon />
            </Styled.Button>
          </Styled.LiceContentContainer>

          <Styled.LiceContentContainer>
            <Styled.InputContainer>
              <Input placeholder='username' />
            </Styled.InputContainer>

            <span></span>

            <Styled.Button >
              <Styled.Icon />
            </Styled.Button>
          </Styled.LiceContentContainer>

          <Styled.LiceContentContainer>
            <Styled.InputContainer>
              <Input placeholder='senha' />
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Input placeholder='confirme a senha'/>
            </Styled.InputContainer>

            <Styled.Button >
              <Styled.Icon />
            </Styled.Button>
          </Styled.LiceContentContainer>
        </TableContainer>
      </Styled.Container>
    </>
  )
}
