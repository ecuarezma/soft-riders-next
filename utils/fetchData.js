import axios from "axios"
import getToken from "@/utils/getToken"

let spotifyToken = getToken("spotify")
let vimeoToken = getToken("vimeo")

const getConfigs = async (api, nextURL) => {
  let url
  switch (api) {
    case "spotify":
      url = nextURL || process.env.SPOTIFY_URL
      return [
        url,
        { headers: { Authorization: `Bearer ${await spotifyToken}` } },
      ]

    case "vimeo":
      url = nextURL ? `https://api.vimeo.com${nextURL}` : process.env.VIMEO_URL
      return [url, { headers: { Authorization: `Bearer ${await vimeoToken}` } }]

    default:
      break
  }
}

export default async function fetchData(
  api,
  nextURL,
  fetchedData = [],
  page = 1
) {
  console.log(`Fetching data from ${api}, page ${page}`)
  api = api.toLowerCase()
  let configs = await getConfigs(api, nextURL)
  let { data } = await axios(...configs)

  nextURL = data.next || data.paging?.next

  let apiData = data.items || data.data
  fetchedData.push(...apiData)

  if (nextURL) return fetchData(api, nextURL, fetchedData, (page += 1))
  console.log("Fetching complete!")
  return fetchedData
}
