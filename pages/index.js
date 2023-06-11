import { useEffect } from "react"
import spotify from "@/utils/getToken"
import CardContainer from "@/components/layouts/CardContainer"
import Card from "components/Card"

const Demo = (props) => {
  // const testFetch = async () => {
  //   let spotifyToken = await axios
  //     .post("https://accounts.spotify.com/api/token", {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Authorization:
  //           "Basic " +
  //           new Buffer.from(
  //             process.env.SPOTIFY_CLIENT_ID +
  //               ":" +
  //               process.env.SPOTIFY_CLIENT_SECRET
  //           ).toString("base64"),
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  //   return console.log(spotifyToken)
  // }

  useEffect(() => {
    // console.log(
    //   "testing environment variable: ",
    //   process.env.NEXT_PUBLIC_VAR_TEST
    // )
    // testFetch()
    // console.log(props.data)
  })
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

export async function getStaticProps() {
  let spotifyToken = await spotify()
  console.log(spotifyToken)
  return {
    props: {
      data: "some data will go here",
    },
  }
}

export default Demo
