<template>
  <div
    id="comming-soon"
    class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded-tr-lg tw-rounded-br-lg tw-cursor-not-allowed"
  >
    <h3
      class="tw-h-full tw-flex tw-justify-center tw-items-center tw-font-bold tw-text-white tw-text-sm"
    >
      COMING SOON
    </h3>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
};
</script>

<style lang="scss" scoped>
#comming-soon {
  @include fadeIn;
  background-color: $coming-soon-bg;
}
</style>
