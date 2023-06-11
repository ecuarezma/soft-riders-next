import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  padding: 1rem;
  padding-bottom: 1.5rem;
  border: thin solid var(--light-gray);
  border-radius: 5px;
  cursor: pointer;
  .card-info > * {
    margin: 0;
  }
  .card-info h3 {
    margin: 0.5rem 0;
  }
  transition: ease-in-out 300ms;
  &:hover {
    background-color: var(--dark-gray);
    color: var(--font-light);
    transition: ease-in-out 300ms;
  }
  @media (max-width: 600px) {
    padding: 0;
    padding-bottom: 1.5rem;
    .card-info {
      padding: 0.5rem;
    }
    &:hover {
      background-color: initial;
      color: initial;
    }
  }
`

const Card = ({ title, author, description, imageUrl }) => {
  return (
    <StyledCard>
      <img src="https://muzikercdn.com/uploads/products/3733/373389/db176545.jpg" />
      <div className="card-info">
        <h3>{`${
          title.length > 20 ? title.substring(0, 20) + "..." : title
        }`}</h3>
        <p>{author.length > 59 ? author.substring(0, 58) + "..." : author}</p>
      </div>
    </StyledCard>
  )
}

export default Card
