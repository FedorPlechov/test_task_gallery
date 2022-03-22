<template>
  <TheGallery />
</template>

<script>
import TheGallery from "./components/TheGallery.vue";

export default {
  name: "App",
  components: {
    TheGallery,
  },
};
</script>

<style lang="scss">
@import "~normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap");

html * {
  box-sizing: border-box;
}

#app {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
