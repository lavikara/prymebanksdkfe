<template>
  <div id="payment-view">
    <Loader v-if="loading" />
    <MediumModal>
      <template v-slot:content>
        <div class="tw-flex">
          <Sidebar />
          <div class="tw-w-full">
            <div class="tw-p-4">
              <TopHeader />
              <router-view v-slot="{ Component }">
                <transition name="fade-transform" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </div>
        </div>
      </template>
    </MediumModal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MediumModal from "@/components/general/MediumModal.vue";
import Sidebar from "@/layout/navigation/Sidebar.vue";
import TopHeader from "@/layout/navigation/TopHeader.vue";

export default {
  name: "DashboardView",

  components: {
    Sidebar,
    TopHeader,
    MediumModal,
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
