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
      <div class="artist-form-container">

        <b-form-group label="Nombre">
          <b-form-input type="text" v-model="form.name"/>
        </b-form-group>

        <b-form-group label="Lastfm">
          <b-form-input type="number" min="0" v-model="form.spotify_pc"/>
        </b-form-group>

      </div>

      <div class="button-container">
        <b-button type="submit" variant="primary">Agregar Artista</b-button>
      </div>

    </b-form>
  </div>
</template>

<script>
// Mixins
import {ArtistRest} from "../../mixins/Artist";

// Models
import {Alert} from "../../models/Alert";
import {Artist} from "../../models/Artist";

export default {
  name: 'ArtistForm',
  mixins: [
    ArtistRest,
  ],
  data() {
    return {
      form: new Artist(),
      alerts: []
    }
  },
  methods: {
    submitForm() {
      this.addArtist(this.form, response => {
        const name = this.form.name;
        if(response) {
          this.alerts.push(new Alert(
              'success',
              name + " Agregada Correctamente"
          ))
          this.form = new Artist();
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
