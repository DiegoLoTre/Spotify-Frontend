import {REST} from "./REST";

export const PeopleRest = {
  mixins: [REST],
  methods: {
    getPeople(cb) {
      this.getAll('/people', response => {
        cb(response)
      })
    }
  }
}
