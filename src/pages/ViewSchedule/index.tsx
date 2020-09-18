import React, { useState } from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import ViewEventsPainel from './../../containers/ViewEventsPainel/index'
import ViewScheduleParticipants from './../../containers/ViewScheduleParticipants/index'

export default function ViewSchedule() {
  const [events] = useState<Array<number>>([1, 2, 3, 4, 5])
  const [eventSelectedID, setEventSelectedID] = useState<number>()
  const [participants] = useState<Array<number>>([1, 2, 3, 4, 5])

  function renderPainels() {
    if (!!eventSelectedID) {
      return <ViewScheduleParticipants participants={participants} />
    } else {
      return <ViewEventsPainel events={events} catchEventNumber={setEventSelectedID} />
    }
  }

  return (
    <>
      <Header haveMenu={true} />

      <Styled.Container>
        {renderPainels()}
      </Styled.Container>
    </>
  )
}
