import styled from 'styled-components'
import {
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa'

export const GridContainer = styled.div`
  width: 90%;
  height: 300px;
  
  margin-bottom: 30px;

  background-color: transparent;
`

export const GridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export const GridTitle = styled.p`
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: bold;

  margin-bottom: 5px;

  justify-self: center;

  color: ${props => props.theme.colors.containerFont};
`

export const GridContent = styled.p`
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: lighter;

  margin-bottom: 2px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${props => props.theme.colors.containerFont};

  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.theme.colors.tableContentBorder};
`

// pages button
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
