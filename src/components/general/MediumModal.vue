<template>
  <div
    id="medium-modal"
    class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-w-full tw-h-screen tw-right-0 tw-z-50"
  >
    <div class="container tw-m-4">
      <div class="card tw-relative tw-bg-white tw-rounded-lg" @click.stop>
        <svg
          class="close-btn tw-absolute tw-w-6 tw-bg-gray tw-rounded-full tw-cursor-pointer tw-p-1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="$router.go(-1)"
        >
          <path
            d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
            fill="currentColor"
          />
        </svg>
        <div class="slot">
          <slot name="content">content</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediumModal",

  emits: ["close"],

  methods: {},
};
</script>

<style lang="scss" scoped>
#medium-modal {
  @include fadeIn;
  background-color: $modal-bg;
  overflow: scroll;

  .container {
    .card {
      max-width: 530px;
      margin: 7rem auto 0 auto;

      .close-btn {
        top: -2rem;
        right: 0rem;

        @media screen and (min-width: 768px) {
          top: 0rem;
          right: -2rem;
        }
      }
    }
  }
}
</style>
