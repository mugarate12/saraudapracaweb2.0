import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { StyledComponent } from 'styled-components'
import { IconType } from 'react-icons'

import * as Styled from './styles'

interface SideBarInterface {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarInterface> = ({ showMenu, setShowMenu }) => {
  const history = useHistory()

  const [eventOptions, setEventOptions] = useState<boolean>(false)
  const [scheduleOptions, setScheduleOptions] = useState<boolean>(false)
  const [adminOptions, setAdminOptions] = useState<boolean>(false)

  function handleShowMenu() {
    setEventOptions(false)
    setScheduleOptions(false)
    setAdminOptions(false)
    setShowMenu(!showMenu)
  }

  function renderSideBarOptions(optionBoolean: boolean, setStateOption: React.Dispatch<React.SetStateAction<boolean>>, IconStyledComponent: StyledComponent<IconType, any>, optionName: string) {
    return (
      <Styled.SidebarButton onClick={() => handleBooleanState(optionBoolean, setStateOption)}>
        <Styled.SideBarItemContent>
          <IconStyledComponent />
          <Styled.SideBarTextOption>{optionName}</Styled.SideBarTextOption>
          {optionBoolean ? <Styled.ArrowUpIcon /> : <Styled.ArrowDownIcon/>}
        </Styled.SideBarItemContent>
      </Styled.SidebarButton>
    )
  }

  function handleBooleanState(optionBoolean: boolean, setStateOption: React.Dispatch<React.SetStateAction<boolean>>) {
    setStateOption(!optionBoolean)
  }

  function renderSideBarSubOptions(optionBoolean: boolean, menuOptions: Array<String>, pathOptions?: Array<String>) {
    function handleSideBarButton(index: number) {
      history.push(`${!!pathOptions ? pathOptions[index] : '/'}`)
      setShowMenu(false)
    }
    
    if (optionBoolean) {
      return (
        <>
          {menuOptions.map((routeOption, index) => {
            return (
              <Styled.SidebarButton key={index} onClick={() => handleSideBarButton(index)} >
                <Styled.SubItemContent>
                  <Styled.SubItemTextOption>{routeOption}</Styled.SubItemTextOption>
                </Styled.SubItemContent>
              </Styled.SidebarButton>
            )
          })}
        </>
      )
    }
  }

  return (
    <>
      <Styled.SideBarOpenContainer>
        <Styled.sideBarCloseButtonContainer>
          <Styled.SidebarButton onClick={() => handleShowMenu()}>
            <Styled.CloseMenuIcon />
          </Styled.SidebarButton>
        </Styled.sideBarCloseButtonContainer>

        <Styled.SideBarItemsContent>
          {renderSideBarOptions(eventOptions, setEventOptions, Styled.EventIcon, 'Eventos')}
          {renderSideBarSubOptions(eventOptions, ['Criar', 'Ver'], ['/eventos/criar', '/eventos/ver'])}

          {renderSideBarOptions(scheduleOptions, setScheduleOptions, Styled.ScheduleIcon, 'Cronograma')}
          {renderSideBarSubOptions(scheduleOptions, ['Criar/Editar', 'Ver', 'Enviar'], ['/cronograma/criar', '/cronograma/ver', '/cronograma/enviar'])}

          {renderSideBarOptions(adminOptions, setAdminOptions, Styled.AdminIcon, 'Administrador')}
          {renderSideBarSubOptions(adminOptions, ['Criar', 'Configurações'])}

          <Styled.SidebarButton onClick={() => history.push('/')}>
            <Styled.SideBarItemContent>
              <Styled.ExitIcon />
              <Styled.SideBarTextOption>Sair</Styled.SideBarTextOption>
            </Styled.SideBarItemContent>
          </Styled.SidebarButton>
        </Styled.SideBarItemsContent>
      </Styled.SideBarOpenContainer>
    </>
  )
}

export default SideBar
