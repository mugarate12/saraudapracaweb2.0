import React, { useState, useContext } from 'react'
import Switch from 'react-switch'
import { useHistory } from 'react-router-dom'
import { ThemeContext as MyThemeContext } from './../../Navigator'
import { ThemeContext, StyledComponent } from 'styled-components'
import { IconType } from 'react-icons'

import * as Styled from './styles'
import Logo from './../../assets/logo.svg'

interface HeaderProps {
  haveMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ haveMenu }) => {
  const toggleTheme = useContext(MyThemeContext)
  const theme = useContext(ThemeContext)
  const history = useHistory()

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [eventOptions, setEventOptions] = useState<boolean>(false)
  const [scheduleOptions, setScheduleOptions] = useState<boolean>(false)
  const [adminOptions, setAdminOptions] = useState<boolean>(false)

  function handleShowMenu() {
    setEventOptions(false)
    setScheduleOptions(false)
    setAdminOptions(false)
    setShowMenu(!showMenu)
  }

  function renderMenuIcon() {
    if (haveMenu) {
      return (
        <Styled.SidebarButton onClick={() => handleShowMenu()}>
          <Styled.MenuIcon />
        </Styled.SidebarButton>
      )
    }
  }

  function renderSideMenu() {
    if (showMenu) {
      return (
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
            {renderSideBarSubOptions(scheduleOptions, ['Criar/Editar', 'Ver', 'Enviar'])}

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
      )
    }
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

  function checkedTheme() {
    return theme.title === 'default' ? false : true
  }

  return (
    <Styled.Container>
      <Styled.LogoAndMenuContainer>
        {renderMenuIcon()}
        {renderSideMenu()}

        <Styled.LogoImg  src={Logo} />
      </Styled.LogoAndMenuContainer>

      <Styled.ToggleThemeContainer>
        <Switch 
          checked={checkedTheme()}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={() => toggleTheme()}
          height={10}
          width={40}
          handleDiameter={20}
          onColor='#FFF'
          offColor='#333'
          onHandleColor='#DA34B5'
          offHandleColor='#DA34B5'
        />
      </Styled.ToggleThemeContainer>
    </Styled.Container>
  )
}

export default Header
