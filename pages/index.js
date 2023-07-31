import fetchData from "@/utils/fetchData"
import CardContainer from "@/components/layouts/CardContainer"
import Card from "components/Card"

const Demo = (props) => {
  // const mapPlaylists = props.data.map(({ name, images, id, owner }) => {
  //   let { display_name } = owner
  //   let creator = display_name.toLowerCase()
  //   if (!creator.includes("miki lee")) {
  //     return (
  //       <Card
  //         title={name}
  //         author={display_name}
  //         imageURL={images[0].url}
  //         key={id}
  //       />
  //     )
  //   }
  // })

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
      {/* <CardContainer>{mapPlaylists}</CardContainer> */}
    </div>
  )
}

export async function getStaticProps() {
  const spotifyData = await fetchData("spotify")
  // const vimeoData = await fetchData("vimeo")

  return {
    props: {
      data: { ...spotifyData },
    },
    revalidate: 30,
  }
}

export default Demo
