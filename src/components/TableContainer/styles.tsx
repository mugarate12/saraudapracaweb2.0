import styled from 'styled-components'

export const Container = styled.div`
  height: 400px;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 25px;

  background-color: ${props => props.theme.colors.containerBackground};

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`