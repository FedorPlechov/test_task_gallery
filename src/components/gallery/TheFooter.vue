<template>
  <footer class="container-pagination">
    <nav class="container-pagination__menu">
      <div v-if="currentPage !== 1">
        <a @click="$emit('goToPage', 1)">1</a><span>...</span
        ><a v-if="currentPage !== 2" @click="$emit('goToPage', prevPage)">{{
          prevPage
        }}</a
        ><span v-else class="empty-span"></span>
      </div>
      <div v-else class="empty-container"></div>
      <span class="container-pagination__current-page">{{ currentPage }}</span>
      <div v-if="currentPage !== totalPages">
        <a
          v-if="currentPage !== totalPages - 1"
          @click="$emit('goToPage', nextPage)"
          >{{ nextPage }}</a
        ><span v-else class="empty-span"></span><span>...</span
        ><a @click="$emit('goToPage', totalPages)">{{ totalPages }}</a>
      </div>
      <div v-else class="empty-container"></div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: Number,
  },
  computed: {
    prevPage() {
      return this.currentPage - 1;
    },
    nextPage() {
      return this.currentPage + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-pagination {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #000000;
  opacity: 0.9;
  display: flex;
  justify-content: center;

  &__menu {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: normal;
    line-height: 60px;

    .empty-container {
      width: 60px;
    }

    a {
      transition: color 200ms ease;
      cursor: pointer;
      padding: 0 6px;

      &:hover {
        color: #5194ec;
      }
    }

    span {
      cursor: default;
      padding: 0 6px;
    }
    .empty-span {
      padding: 10px;
    }
  }

  &__current-page {
    font-size: 18px;
    font-weight: bold;
    transform: translateY(-1px);
  }
}
</style>
