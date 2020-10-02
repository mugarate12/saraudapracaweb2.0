import React, { useState, useEffect } from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import ViewEventsPainel from './../../containers/ViewEventsPainel/index'

import { EventsInterface } from './../../interfaces/events'

export default function SendSchedule() {
  const [events] = useState<Array<EventsInterface>>([])
  const [eventSelectedID, setEventSelectedID] = useState<number>()

  useEffect(() => {
    if (!!eventSelectedID) {
      alert('cronograma enviado!')
      setEventSelectedID(undefined)
    }
  }, [eventSelectedID])

  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        <ViewEventsPainel events={events} catchEventNumber={setEventSelectedID} />
      </Styled.Container>
    </>
  )
}
