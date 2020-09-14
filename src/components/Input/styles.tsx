import styled from 'styled-components'

export const Input = styled.input.attrs({

})`
  height: 25px;
  width: 100%;

  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  
  padding-left: 5px;

  background-color: ${props => props.theme.colors.inputBackground};

  border: 0 none;

  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.inputBorder};
  border-radius: 20px;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
