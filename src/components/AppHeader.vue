<template>
  <nav class="navigation-menu">
    <ul>
      <li class="nav-item" v-for="item in menu" :key="item.id">
        <ul v-if="item.subItems">

          {{ item.title }}

          <li class="nav-subitem" v-for="subItem in item.subItems" :key="subItem.id">
            <router-link :to="subItem.href">
              {{ subItem.title }}
            </router-link>
          </li>

        </ul>
        <router-link v-else :to="item.href">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {ArtistMenu} from '../menu/artist'
import {PersonMenu} from '../menu/person'
import {PlaylistMenu} from '../menu/playlist'
import {SongMenu} from '../menu/song'

export default {
  name: 'AppHeader',
  data() {
    return {
      menu: [{
        title: 'Home',
        href: '/',
      },
        SongMenu,
        ArtistMenu,
        PersonMenu,
        PlaylistMenu,
      ]
    }
  }
}
</script>
