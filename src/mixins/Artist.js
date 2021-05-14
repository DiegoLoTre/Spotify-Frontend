import {REST} from "./REST";

export const ArtistRest = {
  mixins: [REST],
  methods: {
    addArtist(data, cb) {
      this.saveObject('/artists', data, response => cb(response));
    },
    getArtist(cb) {
      this.getAll('/artists', response => {
        cb(response)
      })
    }
  }
}
