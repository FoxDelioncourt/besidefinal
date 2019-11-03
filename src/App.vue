<template>
  <div id="app">
    <div class="inner">
      <NavBar />
      <router-view />
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
// import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar
    // ,
    // Footer
  }
};
</script>

<style lang="scss" src="./global.scss"></style>
