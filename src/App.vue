<template>
  <div id="app">

    <div id="menu">
      <AppHeader></AppHeader>
    </div>

    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {AppHeader}
}
</script>
