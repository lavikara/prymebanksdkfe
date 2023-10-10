<template>
  <div
    id="small-modal"
    class="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-w-full tw-h-screen tw-right-0 tw-z-50"
  >
    <div class="container tw-m-4">
      <div class="card tw-bg-white tw-rounded-lg tw-py-8 tw-px-6" @click.stop>
        <div class="tw-relative">
          <svg
            class="close-btn tw-absolute tw-w-6 tw-bg-gray tw-rounded-full tw-cursor-pointer tw-p-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="closeModal"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            />
          </svg>
          <svg
            v-if="$route.name !== 'EmailLayout'"
            class="back-btn tw-absolute tw--top-10 tw-w-6 tw-bg-gray tw-rounded-full tw-cursor-pointer tw-p-1"
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
        </div>
        <div>
          <slot name="content">content</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallModal",

  emits: ["close"],

  methods: {
    closeModal() {
      console.log(window.location);
      window.parent.postMessage({
        type: "pryme.widget.closed",
        data: "cancelled",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#small-modal {
  @include fadeIn;
  background-color: $modal-bg;
  overflow: scroll;

  .container {
    .card {
      max-width: 400px;
      margin: 4rem auto 0 auto;
    }

    .close-btn,
    .back-btn {
      top: -4rem;
      right: 1rem;

      @media screen and (min-width: 768px) {
        right: 1rem;
      }
    }

    .close-btn {
      right: -1rem;
    }
  }
}
</style>
