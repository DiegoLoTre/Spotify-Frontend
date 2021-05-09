import {REST} from "./REST";

export const SongsRest = {
  mixins: [REST],
  methods: {
    addSong(data, cb) {
      this.saveObject('/songs', data, response => cb(response));
    }
  }
}
