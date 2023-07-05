import axios from "axios"

const getConfigs = (api) => {
  switch (api) {
    case "spotify":
      return [
        "https://accounts.spotify.com/api/token",
        { grant_type: "client_credentials" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer.from(process.env.SPOTIFY_KEY).toString("base64"),
          },
        },
      ]
    case "vimeo":
      return [
        "https://api.vimeo.com/oauth/authorize/client",
        { grant_type: "client_credentials" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer.from(process.env.VIMEO_KEY).toString("base64"),
            Accept: "application/vnd.vimeo.*+json;version=3.4",
          },
        },
      ]

    default:
      break
  }
}

export default async function getToken(api) {
  const configs = getConfigs(api)
  return await axios
    .post(...configs)
    .then((res) => res.data.access_token)
    .catch((err) => err)
}
