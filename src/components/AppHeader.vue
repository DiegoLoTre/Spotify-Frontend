<template>
  <nav class="navigation-menu">
    <ul>
      <li class="nav-item" v-for="item in menu" :key="item.id">
        <ul v-if="item.subItems">

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
export default {
  name: 'AppHeader',
  data() {
    return {
      menu: [{
        title: 'Home',
        href: '/',
      }, {
        title: 'Canciones',
        subItems: [{
          title: 'Ver Canciones',
          href: '/songs',
        }, {
          title: 'Agregar Nuevas Canciones',
          href: '/songs/form',
        }]
      }]
    }
  }
}
</script>
