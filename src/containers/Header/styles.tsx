import styled from 'styled-components'
import {
  FaBars
} from 'react-icons/fa'

export const Container = styled.header`
  height: 60px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LogoAndMenuContainer = styled.div`
  margin-left: 5%;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ToggleThemeContainer = styled.div`
  margin-right: 5%;
`

export const LogoImg = styled.img.attrs(() => ({
  alt: "Sarau's logo"
}))`
  width: 80px;
  height: 30px;
`

// side bar
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

// icons
export const MenuIcon = styled(FaBars)`
  margin-right: 10px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.generalIcons};
`
