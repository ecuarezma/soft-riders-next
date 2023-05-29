import styled from "styled-components"

const SyledContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
  margin: 2rem;
`
const CardContainer = ({ children }) => (
  <SyledContainer>{children}</SyledContainer>
)

export default CardContainer
