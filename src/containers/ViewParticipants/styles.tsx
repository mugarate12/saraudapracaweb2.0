import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 90%;
  
  margin-bottom: 50px;

  background-color: transparent;
`

export const GridBody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
