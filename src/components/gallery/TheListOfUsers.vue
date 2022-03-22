<template>
  <div class="container-users" v-if="isLoading">
    <OneUser v-for="user of users" :key="user.id" :user="user" />
  </div>
  <Spinner v-else />
</template>

<script>
import OneUser from "@/components/gallery/OneUser";
import Spinner from "@/components/spinner/Spinner";
import { getUsers } from "@/service/unsplashApi";

export default {
  name: "TheListOfUsers",
  components: {
    OneUser,
    Spinner,
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      users: [],
      isLoading: false,
    };
  },
  watch: {
    currentPage(val) {
      this.setData(val);
    },
  },
  methods: {
    async setData(currentPage) {
      this.isLoading = false;
      const result = await getUsers(currentPage);
      this.emitTotalPage(result.total);
      this.users = result.results.map((el) => {
        return {
          id: el.id,
          fullName: el.user.first_name + " " + el.user.last_name,
          username: el.user.username,
          photoUrl: el.urls.small,
          profilePhotoUrl: el.user.profile_image.small,
          linkToProfile: el.user.links.html,
          views: el.statistics.views.total,
        };
      });
      this.isLoading = true;
    },
    emitTotalPage(payload) {
      payload = Math.ceil(payload / 6);
      this.$emit("totalPages", payload);
    },
  },
  created() {
    this.setData(this.currentPage);
  },
};
</script>

<style lang="scss" scoped>
.container-users {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
