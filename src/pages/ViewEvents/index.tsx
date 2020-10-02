import React, { useState, useEffect } from 'react'

import * as Styled from './styles'

import Header from './../../containers/Header/index'
import ViewEventsPainel from './../../containers/ViewEventsPainel/index'
import ViewParticipantsPainel from './../../containers/ViewParticipants/index'

import isLogged from './../../utils/islogged'
import useToken from './../../hooks/useToken'

import api from './../../config/axios'

import { EventsInterface } from './../../interfaces/events'

export default function ViewEvents() {
  const [events, setEvents] = useState<Array<EventsInterface>>([])
  const [eventSelectedID, setEventSelectedID] = useState<number>()
  const [participants] = useState<Array<number>>([1, 2, 3, 4, 5])
  const [token] = useToken()

  async function getEvents() {
    await api.get('/event', {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data.events)
        setEvents(response.data.events)
      })
      .catch(console.log)
  }

  useEffect(() => {
    if (events.length === 0) {
      getEvents()
    }
  })

  isLogged()

  function renderPainels() {
    if (!!eventSelectedID) {
      return <ViewParticipantsPainel participants={participants} />
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
