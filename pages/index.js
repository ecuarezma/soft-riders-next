import CardContainer from "@/components/layouts/CardContainer"
import Card from "components/Card"

const Demo = () => {
  return (
    <div>
      <header>
        <h3>Components</h3>
      </header>
      <h4>Card</h4>
      <Card
        title="Here we go again is this"
        author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
      />
      <h4>Card Container</h4>
      <CardContainer>
        <Card
          title="Here we go again is this"
          author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
        />
        <Card
          title="Here we go again is this"
          author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
        />
        <Card
          title="Here we go again is this"
          author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
        />
        <Card
          title="Here we go again is this"
          author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
        />
        <Card
          title="Here we go again is this"
          author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
        />
        <Card
          title="Here we go again is this"
          author="The Velvet Underground, feat. Nico, plus Andy did the album cover"
        />
      </CardContainer>
    </div>
  )
}
export default Demo
