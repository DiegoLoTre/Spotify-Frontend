import MenuItem from "./MenuItem";

let url = "/songs"
let SongMenu = {
  title: "Canciones",
  subItems: [
    new MenuItem("Ver Canciones", url + ""),
    new MenuItem("Agregar Nuevas Canciones", url + "/form"),
  ]
}

export {url, SongMenu}

