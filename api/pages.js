import GhostContentAPI from "@tryghost/content-api";


const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: process.env.GHOST_VER
})

export async function getPages() {
  return await api.pages
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}
