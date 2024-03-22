<script>
import MainHeader from './components/layouts/MainHeader.vue'
export default {
  components: {
    MainHeader
  }
}
</script>

<template>
  <MainHeader></MainHeader>
  <main class="my-8">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
