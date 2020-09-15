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
