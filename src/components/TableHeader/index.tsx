import React from 'react'

import * as Styled from './styles'

interface TableHeaderInterface {
  type?: 'events' | 'participants' | 'schedule' | 'admin';
}

const TableHeader: React.FC<TableHeaderInterface> = ({ type }) => {
  function renderIcon() {
    switch (type) {
      case 'events':
        return <Styled.EventIcon />
      case 'participants':
        return <Styled.ParticipantsIcon />
      case 'schedule':
        return <Styled.ScheduleIcon />
      case 'admin':
        return <Styled.AdminIcon />
      default:
        return
    }
  }
  
  return (
    <Styled.Container>
      {renderIcon()}
      <Styled.Line></Styled.Line>
    </Styled.Container>
  )
}

export default TableHeader
