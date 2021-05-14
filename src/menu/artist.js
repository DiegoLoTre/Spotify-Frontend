import MenuItem from "./MenuItem";

let url = "/artists"
let ArtistMenu = {
  title: "Artistas",
  subItems: [
    new MenuItem("Agregar Nuevo Artista", url + "/form")
  ]
}

export {url, ArtistMenu}
