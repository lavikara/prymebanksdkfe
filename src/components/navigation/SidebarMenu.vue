<template>
  <ul id="sidebar-menu">
    <li>
      <router-link
        :to="href"
        class="tw-flex tw-font-bold tw-cursor-pointer tw-text-white hover:tw-text-green-bg4 tw-pl-4 tw-pr-6 tw-py-4"
      >
        <span class="">
          {{ title }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SidebarMenu",

  props: {
    title: { type: String, default: () => "", required: true },
    href: { type: String, default: () => "" },
    focus: { type: Boolean, default: () => false },
  },
};
</script>

<style lang="scss" scoped></style>
