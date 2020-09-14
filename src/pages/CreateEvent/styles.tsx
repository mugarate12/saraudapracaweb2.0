import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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

  margin-bottom: 30px;
`

export const FormTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 40px;
  
  color: ${props => props.theme.colors.containerFont};

  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;
`