import styled from 'styled-components'
import { FaCalendar, FaClock, FaUsers, FaUser } from 'react-icons/fa'

export const Container = styled.div`
  height: 30px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;
`

export const Line = styled.div`
  height: 5px;
  width: 90%;
  
  margin-left: 10px;
  
  border-radius: 10px;

  background-color: ${props => props.theme.colors.background};

  @media (max-width: 900px) {
    width: 85%;
  }

  @media (max-width: 540px) {
    width: 80%;
  }

  @media (max-width: 350px) {
    width: 75%;
  }
`

// icons
export const EventIcon = styled(FaCalendar)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

export const ScheduleIcon = styled(FaClock)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

export const ParticipantsIcon = styled(FaUsers)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

export const AdminIcon = styled(FaUser)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`
