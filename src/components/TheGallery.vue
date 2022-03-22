<template>
  <div class="container-gallery">
    <TheListOfUsers
      :currentPage="currentPage"
      @totalPages="setTotalPages($event)"
    />
    <teleport to="#app">
      <TheFooter
        :currentPage="currentPage"
        :totalPages="totalPages"
        @goToPage="toggleCurrentPage($event)"
      />
    </teleport>
  </div>
</template>

<script>
import TheListOfUsers from "@/components/gallery/TheListOfUsers";
import TheFooter from "@/components/gallery/TheFooter";

export default {
  name: "HelloWorld",
  components: {
    TheListOfUsers,
    TheFooter,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: null,
    };
  },
  methods: {
    setTotalPages(payload) {
      this.totalPages = payload;
    },
    toggleCurrentPage(payload) {
      this.currentPage = payload;
    },
  },
};
</script>

<style scoped lang="scss">
.container-gallery {
  max-width: 320px;
  margin: auto;
  @media (min-width: 480px) {
    max-width: 480px;
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
}
</style>
