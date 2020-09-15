import React, { useState } from 'react'

import * as Styled from './styles'

import TableContainer from './../../components/TableContainer/index'
import TableHeader from './../../components/TableHeader/index'
import CheckBox from './../../components/Checkbox/index'
import Input from './../../components/Input/index'

export default function ViewEventsPainel() {
  const [checkBox, setCheckBox] = useState<boolean>(false)
  const [eventName, setEventName] = useState<string>('')

  function renderEvents() {
    const array = [1, 2, 3, 4, 5]

    return array.map((event, index) => {
      return (
        <Styled.GridContentButton key={index} >
          <Styled.GridBody key={index}>
            <Styled.GridContent>Sarau da praça</Styled.GridContent>
            <Styled.GridContent>20/10/2019</Styled.GridContent>
          </Styled.GridBody>
        </Styled.GridContentButton>
      )
    })
  }

  return (
    <TableContainer>
      <TableHeader type='events' ></TableHeader>
      
      <Styled.FiltersContainer>
        <Styled.CheckBoxContainer>
          <CheckBox value={checkBox} onChange={() => setCheckBox(!checkBox)} />
          <Styled.CheckBoxText>Não concluidos</Styled.CheckBoxText>
        </Styled.CheckBoxContainer>

        <Styled.InputContainer>
          <Input placeholder='Nome do evento' value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </Styled.InputContainer>
      </Styled.FiltersContainer>

      <Styled.GridContainer>
        <Styled.GridBody>
          <Styled.GridTitle>Nome</Styled.GridTitle>
          <Styled.GridTitle>Data</Styled.GridTitle>
        </Styled.GridBody>

        {renderEvents()}
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
