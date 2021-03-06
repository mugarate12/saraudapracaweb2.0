import styled from 'styled-components'

import { 
  FaArrowUp, 
  FaArrowDown, 
  FaTimes,
  FaCalendar,
  FaClock,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa'

// container e general 
export const SidebarButton = styled.button`
  border: none 0;
  background-color: transparent;
  
  display: flex;
  flex-direction: row;

  cursor: pointer;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :active {
    border-style: solid;
    border-width: 1px;
    border-color: #333;
  }

  :hover {
    opacity: 0.5;
    transition: 0.2s;
  }
`

export const SideBarOpenContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;

  width: 30%;
  height: 100vh;

  background-color: ${props => props.theme.colors.sideBarBackground};
  box-shadow: 2px 0px 8px 1px ${props => props.theme.colors.sideBarBoxShadow};

  @media (max-width: 800px) {
    width: 40%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const sideBarCloseButtonContainer = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 15px;
`

export const SideBarItemsContent = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const SideBarItemContent = styled.li`
  height: 30px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
`

export const SideBarTextOption = styled.p`
  margin-left: 15px;

  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;

  color: ${props => props.theme.colors.sideBarFontColor};
`

export const CloseMenuIcon = styled(FaTimes)`
  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

// side bar sub item 
export const SubItemContent = styled.li`
  height: 20px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const SubItemTextOption = styled.p`
  margin-left: 60px;

  font-size: 14px;
  font-size: 0.875rem;
  font-weight: bold;

  color: ${props => props.theme.colors.sideBarFontColor};
`

export const ArrowDownIcon = styled(FaArrowDown)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

export const ArrowUpIcon = styled(FaArrowUp)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

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

export const AdminIcon = styled(FaUser)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

export const ExitIcon = styled(FaSignOutAlt)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`
