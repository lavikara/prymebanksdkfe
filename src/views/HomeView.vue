<template>
  <div id="home-view">
    <Loader v-if="loading" />
    <div class="view-container">
      <div class="">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DashboardView",

  data() {
    return {};
  },

  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style lang="scss" scoped>
#home-view {
  @include fadeIn;
}
</style>
