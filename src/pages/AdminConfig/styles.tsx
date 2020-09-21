import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa'

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

export const LiceContentContainer = styled.div`
  width: 90%;
  height: 30px;

  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(2, 3fr) 1fr;
`

export const InputContainer = styled.div`
  width: 80%;
`

export const Button = styled.button`
  height: 30px;
  width: 30px;

  justify-self: end;

  /* display: flex;
  justify-content: center;
  align-content: center; */

  border: 0 none;
  border-radius: 5px;

  cursor: pointer;

  background-color:${props => props.theme.colors.buttonbackground};

  :hover {
    opacity: 0.8;
    transition: 1s;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  :active {
    border-style: solid;
    border-width: 1px;
    border-color: #333;
  }
`

export const Icon = styled(FaArrowRight)`
  font-size: 10px;

  color: ${props => props.theme.colors.buttonIcon};
`
