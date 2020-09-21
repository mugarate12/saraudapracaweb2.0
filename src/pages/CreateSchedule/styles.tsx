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

export const ContentContainer = styled.div`
  width: 80%;

  margin-bottom: 10px;

  background-color: transparent;
`

export const ContentGridTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-bottom: 15px;

  align-content: center;
`

export const ContentGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-bottom: 2px;

  align-content: center;
`

export const ContentBodyContainer = styled.div`
  height: 250px;
  width: 80%;
`

export const GridTitle = styled.h3`
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: bold;

  justify-self: center;

  color: ${props => props.theme.colors.containerFont};
`

export const ParticipantContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.tableContentBorder};
`

export const ParticipantContent = styled.p`
  font-size: 14px;
  font-size: 0.875rem;

  color: ${props => props.theme.colors.containerFont};
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

  margin-bottom: 10px;

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

// confirm button
export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const ConfirmButton = styled.button`
  width: 100px;
  height: 30px;

  margin-right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border: 0 none;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.buttonbackground};

  :hover {
    opacity: 0.8;
    transition: 1s;
  }

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

export const ArrowRightIconButton = styled(FaArrowRight)`
  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.buttonIcon};
`
