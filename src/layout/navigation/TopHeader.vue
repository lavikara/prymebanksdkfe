<template>
  <div>
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-8">
      <img class="tw-w-10" src="@/assets/img/logo.png" alt="info" />
      <div>
        <p>{{ email }}</p>
        <p class="tw-text-green tw-text-xs tw-font-bold">
          Pay {{ formatCurrency(depositeStatus?.amount, 2, "NGN") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatCurrency } from "@/utils/helpers.js";

export default {
  computed: {
    ...mapState({
      depositeStatus: (state) => state.depositeStatus,
      email: (state) => state.email,
    }),
  },

  methods: {
    formatCurrency,
  },
};
</script>

<style lang="scss" scoped></style>
