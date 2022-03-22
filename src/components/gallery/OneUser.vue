<template>
  <div class="user-card">
    <div class="user-card__header" @click="goToProfile($event)" ref="profile">
      <div
        class="user-card__profile-photo"
        :style="{ backgroundImage: `url(${user.profilePhotoUrl})` }"
      ></div>
      <div class="user-card__profile-information">
        <h3 class="user-card__name">{{ user.fullName }}</h3>
        <p class="user-card__username">@{{ user.username }}</p>
      </div>
    </div>
    <div
      class="user-card__photo"
      :style="{ backgroundImage: `url(${user.photoUrl})` }"
    ></div>
    <div class="user-card__views">{{ views }}</div>
  </div>
</template>

<script>
export default {
  name: "OneUser",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    views() {
      return this.numberWithSpaces(this.user.views);
    },
  },
  methods: {
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    goToProfile(event) {
      if (event.target === this.$refs.profile) return;
      window.open(this.user.linkToProfile);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  line-height: 14px;

  &:nth-child(2n) {
    @media (min-width: 768px) {
      margin-left: 20px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    height: 50px;
  }

  &__profile-photo {
    width: 30px;
    height: 30px;
    margin: 10px;
    cursor: pointer;
    background-size: cover;
    border-radius: 50%;
  }

  &__profile-information {
    display: flex;
    flex-direction: column;
  }

  &__name {
    padding: 0;
    margin: 0;
    color: #333333;
    cursor: pointer;
  }

  &__username {
    padding: 0;
    margin: 0;
    color: #8d8d8d;
    cursor: pointer;
  }

  &__photo {
    height: 230px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-width: 480px) {
      height: 300px;
    }
    @media (min-width: 768px) {
      width: 320px;
      height: 230px;
    }
  }

  &__views {
    height: 32px;
    text-align: right;
    padding: 10px 38px 0 0;
    color: #8d8d8d;
    position: relative;
    font-weight: bold;
    cursor: default;
    @media (min-width: 480px) {
      padding: 10px 23px 0 0;
    }
    @media (min-width: 768px) {
      padding: 10px 38px 0 0;
    }

    &:after {
      content: url("../../assets/icons/eye.svg");
      padding-left: 5px;
      position: absolute;
      width: 18px;
      transform: translateY(1px);
    }
  }
}
</style>
