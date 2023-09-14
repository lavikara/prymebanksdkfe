<template>
  <div
    id="sidebar"
    class="tw-bg-green tw-border-r xl:tw-inline-block tw-py-4 tw-z-10"
  >
    <div class="sidebar-container tw-h-full tw-overflow-y-scroll">
      <nav>
        <p
          class="tw-whitespace-nowrap tw-font-bold tw-text-white tw-px-6 tw-mb-4 tw-mt-8"
        >
          Pay With
        </p>
        <div>
          <SidebarMenu title="Transfer" class="tw-border-t tw-px-6" />
        </div>
        <div>
          <SidebarMenu title="Bank" class="tw-border-t tw-px-6" />
        </div>
        <div>
          <SidebarMenu title="Card" class="tw-border-t tw-px-6" />
        </div>
        <div>
          <SidebarMenu title="USSD" class="tw-border-t tw-border-b tw-px-6" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/navigation/SidebarMenu.vue";

export default {
  name: "Sidebar",

  components: { SidebarMenu },

  data() {
    return {};
  },

  created() {},

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
