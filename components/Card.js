import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  border: thin solid black;
  border-radius: 0 0 5px 5px;
`

const Card = ({ title, author, description, imageUrl }) => {
  return <StyledCard>Card Component</StyledCard>
}

export default Card
