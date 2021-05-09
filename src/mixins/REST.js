import axios from 'axios';

const url = 'http://localhost:8080/api'

export const REST = {
  computed: {
    path() {
      return url
    }
  },
  methods: {
    getAll(path, cb) {
      axios
        .get(url + path)
        .then(response => {
          cb(response.data);
        })
        .catch(function(e) {
          console.log(e);
          cb();
        })
    },

    saveObject(path, object, cb) {
      axios
        .post(url + path, object)
        .then(function() {
          cb(true);
        })
        .catch(function(e) {
          console.log(e);
          cb(false);
        })
    },
  }
}
