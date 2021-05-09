import {REST} from "./REST";

export const PlaylistRest = {
  mixins: [REST],
  methods: {
    getPlaylist(cb) {
      this.getAll('/playlists', response => {
        cb(response)
      })
    }
  }
}
