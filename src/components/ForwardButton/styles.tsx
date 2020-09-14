import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

export const Button = styled.button`
  height: 70px;
  width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color:${props => props.theme.colors.buttonbackground};

  border: none 0;
  border-radius: 15px;

  box-shadow: 5px 0px 5px 1px #089643;

  :active {
    background-color: #078C64;
    transition: 1s;
    opacity: 1;

    padding: 1px;
    
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
  }

  :hover {
    opacity: 0.7;
    transition: 0.8s;
  }

  :focus {
    outline: 0;
  }
`

export const Icon = styled(FaArrowRight)`
  font-size: ${props => props.theme.iconSize};

  color: ${props => props.theme.colors.buttonIcon};
`