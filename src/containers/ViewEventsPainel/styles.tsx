import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export const FiltersContainer = styled.div`
  height: 30px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 50px;

  @media (max-width: 450px) {
    margin-left: 35px;
  }
`

export const CheckBoxText = styled.p`
  font-size: 14px;
  font-size: 0.875rem;

  margin-left: 5px;

  color: ${props => props.theme.colors.containerFont};
`

export const InputContainer = styled.div`
  width: 50%;

  margin-left: 15px;

  @media (max-width: 650px) {
    width: 40%;
  }

  @media (max-width: 450px) {
    width: 30%;
  }
`

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


// grid content
export const GridContainer = styled.div`
  width: 80%;
  
  margin-bottom: 50px;

  background-color: transparent;
`

export const GridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export const GridContentButton = styled.button`
  width: 100%;
  
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

// icons
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

