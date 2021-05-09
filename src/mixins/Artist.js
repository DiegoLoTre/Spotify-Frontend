import {REST} from "./REST";

export const ArtistRest = {
  mixins: [REST],
  methods: {
    getArtist(cb) {
      this.getAll('/artists', response => {
        cb(response)
      })
    }
  }
}
