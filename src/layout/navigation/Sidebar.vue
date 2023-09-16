<template>
  <div
    id="sidebar"
    class="tw-bg-green tw-border-r tw-rounded-tl-lg tw-rounded-bl-lg tw-py-4 tw-z-10"
  >
    <div class="sidebar-container tw-h-full tw-overflow-y-scroll">
      <nav>
        <h3
          class="tw-whitespace-nowrap tw-text-white tw-text-xs tw-pl-4 tw-pr-6 tw-mb-4 tw-mt-8"
        >
          PAY WITH
        </h3>
        <div>
          <SidebarMenu
            title="Transfer"
            :href="{ name: 'TransferLayout' }"
            class="tw-border-t"
          />
        </div>
        <div>
          <SidebarMenu
            title="Card"
            :href="{ name: 'CardLayout' }"
            class="tw-border-t"
          />
        </div>
        <div>
          <SidebarMenu
            title="Bank"
            :href="{ name: 'BankLayout' }"
            class="tw-border-t"
          />
        </div>

        <div>
          <SidebarMenu
            title="USSD"
            :href="{ name: 'UssdLayout' }"
            class="tw-border-t tw-border-b"
          />
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
