import styled from 'styled-components'

export const FlexCenter = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
  column-gap: 10px;
  margin-top: 170px;
  padding: 0 400px;
  @media (max-width: 1700px){
    padding:0 220px;
  }
  @media (max-width: 1200px){
    padding:0 150px;
  }
`

export const FlexCenterImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  column-gap: 10px;
  padding: 0 400px;
  border-radius: 50%;
  @media (max-width: 1700px){
    padding:0 220px;
    margin-top: 50px;
  }
  @media (max-width: 1200px){
    padding:0 150px;
  }
`

export const Horizontal = styled.div`
  width: 300px;
  border-top: 1px solid #e8e8e8;
`

export const Color = styled.div`
  color: var(--green);
  font-size: 25px;
`

export const Title = styled.div`
  font-size: 30px;
  color: var(--greey);
`

export const TitleContact = styled.div`
  text-align: center;
  margin-top: 350px;
  padding-bottom: 50px;
  font-size: 30px;
`
