import styled from 'styled-components'

export const Input = styled.input.attrs({
  type: 'checkbox'
})`
  height: 15px;
  width: 15px;

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