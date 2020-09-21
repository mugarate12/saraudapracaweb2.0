import styled from 'styled-components'
import {
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa'

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-height: 600px) {
    height: 88vh;
  }

  @media (max-height: 400px) {
    height: 82vh;
  }
`

// pagination
export const GenericButton = styled.button`
  border: 0 none;
  background-color: transparent;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  :active {
    border-style: solid;
    border-width: 1px;
    border-color: #333;
  }
`

export const PagesIconsContainer = styled.div`
  height: 30px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ArrowLeftIcon = styled(FaArrowLeft)`
  margin-left: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`

export const ArrowRightIcon = styled(FaArrowRight)`
  margin-right: 15px;

  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.sideBarIcon};
`
