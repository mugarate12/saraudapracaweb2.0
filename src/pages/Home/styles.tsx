import styled from 'styled-components'

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

export const FormContainer = styled.form`
  width: 80%;
`

export const FormTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 40px;
  
  color: ${props => props.theme.colors.containerFont};

  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 10px;
`

export const CheckBoxText = styled.p`
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: bold;

  margin-left: 10px;

  color: ${props => props.theme.colors.containerFont};
`

export const FailCredentialsButton = styled.button`
  margin-top: 10px;

  cursor: pointer;

  border: none 0;
  background-color: transparent;

  :active {
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
  }

  :hover {
    opacity: 0.7;
    transition: 0.8s;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const FailCredentialsText = styled.p`
  font-size: 14px;
  font-size: 0.875rem;

  color: ${props => props.theme.colors.containerFont};
`