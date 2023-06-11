export default async function handler(req, res) {
  let data = await fetch("https://swapi.dev/api/people/1").then((res) => res)
  res.json(data)
}
//will probably need to use getStaticProps
