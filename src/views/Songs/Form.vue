<template>
  <div class="songs-form">
    <div class="alert-container">
      <b-alert
          v-for="item in alerts" :key="item.index"
          v-model="item.show"
          :variant="item.variant"
          dismissible>
        {{ item.text }}
      </b-alert>
    </div>

    <b-form
        @submit="submitForm">
      <div class="song-form-container">

        <b-form-group label="Nombre">
          <b-form-input type="text" v-model="form.name"/>
        </b-form-group>

        <b-form-group label="Spotify Url">
          <b-form-input type="text" v-model="form.spotify_url" required/>
        </b-form-group>

        <b-form-group label="Liked">
          <b-form-checkbox v-model="form.liked"/>
        </b-form-group>

        <b-form-group label="Saved">
          <b-form-checkbox v-model="form.saved"/>
        </b-form-group>

        <b-form-group label="Spotify PC">
          <b-form-input type="number" min="0" v-model="form.spotify_pc"/>
        </b-form-group>

        <b-form-group label="Spotify Lap">
          <b-form-input type="number" min="0" v-model="form.spotify_lap"/>
        </b-form-group>

      </div>

      <div class="playlist-container">
        <b-form-group
            class="playlist-container"
            label="Playlist">
          <b-form-checkbox-group v-model="form.playlists">
            <b-form-checkbox v-for="item in playlist" :value="item" v-model="form.playlists" :key="item.id">
              {{ item.name }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </div>

      <div class="people-container">
        <b-form-group
            class="people-container"
            label="People">
          <b-form-checkbox-group
              v-model="form.people">
            <b-form-checkbox v-for="item in people" :value="item" v-model="form.people" :key="item.id">
              {{ item.name }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </div>

      <div class="button-container">
        <b-button type="submit" variant="primary">Agregar Cancion</b-button>
      </div>

    </b-form>
  </div>
</template>

<script>

// Mixins
import {PeopleRest} from "../../mixins/People";
import {PlaylistRest} from "../../mixins/Playlist";
import {SongsRest} from "../../mixins/Songs";

// Models
import {Alert} from "../../models/Alert";
import {Songs} from "../../models/Songs";

export default {
  name: 'SongForm',
  mixins: [
    PeopleRest,
    PlaylistRest,
    SongsRest,
  ],
  data() {
    return {
      people: [],
      playlist: [],
      form: new Songs(),
      alerts: []
    }
  },
  created() {
    this.getPeople(response => this.people = response);
    this.getPlaylist(response => this.playlist = response);
  },
  methods: {
    submitForm() {
      this.addSong(this.form, response => {
        const name = this.form.spotify_url;

        if(response) {
          this.alerts.push(new Alert(
              'success',
              name + " Agregada Correctamente"
          ))
          this.form = new Songs();
        }
        else {
          this.alerts.push(new Alert(
              'danger',
              'Error al agregar ' + name
          ))
        }
      });
    }
  },
}
</script>
