<template>
  <div id="payment-view">
    <Loader v-if="loading" />
    <SmallModal>
      <template v-slot:content>
        <div class="tw-flex tw-border tw-rounded-lg">
          <!-- <Sidebar /> -->
          <div class="tw-w-full">
            <div class="tw-relative tw-min-h-full tw-p-4">
              <TopHeader />
              <router-view v-slot="{ Component }">
                <transition name="fade-transform" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
              <ComingSoon
                v-if="
                  $route.name === 'UssdLayout' ||
                  $route.name === 'BankLayout' ||
                  $route.name === 'CardLayout'
                "
              />
            </div>
          </div>
        </div>
      </template>
    </SmallModal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SmallModal from "@/components/general/SmallModal.vue";
import Sidebar from "@/layout/navigation/Sidebar.vue";
import TopHeader from "@/layout/navigation/TopHeader.vue";
import ComingSoon from "@/components/general/ComingSoon.vue";

export default {
  name: "DashboardView",

  components: {
    Sidebar,
    TopHeader,
    SmallModal,
    ComingSoon,
    SmallModal,
  },

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
#payment-view {
  @include fadeIn;
}
</style>
