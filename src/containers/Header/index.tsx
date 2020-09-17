import React, { useState, useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext as MyThemeContext } from './../../Navigator'
import { ThemeContext } from 'styled-components'

import * as Styled from './styles'

import Logo from './../../assets/logo.svg'
import SideBar from './../../components/SideBar/index'

interface HeaderProps {
  haveMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ haveMenu }) => {
  const toggleTheme = useContext(MyThemeContext)
  const theme = useContext(ThemeContext)

  const [showMenu, setShowMenu] = useState<boolean>(false)

  function renderMenuIcon() {
    if (haveMenu) {
      return (
        <Styled.SidebarButton onClick={() => setShowMenu(!showMenu)}>
          <Styled.MenuIcon />
        </Styled.SidebarButton>
      )
    }
  }

  function renderSideMenu() {
    if (showMenu) {
      return <SideBar showMenu={showMenu} setShowMenu={setShowMenu} />
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
