<template>
  <div>
    <div>
      <h3 class="tw-text-sm tw-mb-4">
        Pay {{ formatCurrency(depositeStatus?.amount, 2, "NGN") }} to
        OjirehPrime checkout
      </h3>
      <div class="tw-bg-gray-bg4 tw-rounded-lg tw-p-4">
        <div class="tw-mb-4">
          <h3 class="tw-text-xs">Bank Name</h3>
          <p class="tw-font-bold tw-text-sm">{{ depositeStatus?.bankName }}</p>
        </div>
        <div class="tw-mb-4">
          <h3 class="tw-text-xs">Account Number</h3>
          <p class="tw-font-bold tw-text-sm">{{ depositeStatus?.nuban }}</p>
        </div>
        <div>
          <h3 class="tw-text-xs">Amount</h3>
          <p class="tw-font-bold tw-text-sm">
            {{ formatCurrency(depositeStatus?.amount, 2, "NGN") }}
          </p>
        </div>
      </div>
      <p
        class="tw-max-w-[16rem] tw-text-center tw-text-orange tw-font-bold tw-text-xs tw-mt-4 tw-mb-8 tw-mx-auto"
      >
        Search for Solid Allianze or Pryme bank on your bank app. Use this
        account number for this transaction only.
      </p>
      <div class="tw-text-center tw-mb-4">
        <p ref="timer" class="tw-text-green">{{ timer }}</p>
        <h3 v-if="timer !== 'EXPIRED'">Expires in</h3>
      </div>
      <Btn title="I've Sent The Money" @click="confirm" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Btn from "@/components/general/BtnComponent.vue";
import { formatCurrency } from "@/utils/helpers.js";

export default {
  name: "TransferPopup",

  components: {
    Btn,
  },

  computed: {
    ...mapState({
      depositeStatus: (state) => state.depositeStatus,
      timer: (state) => state.timer,
    }),
  },

  mounted() {
    this.startCountdown();
  },

  methods: {
    ...mapActions(["startCountdown"]),

    formatCurrency,

    confirm() {},
  },
};
</script>

<style lang="scss" scoped></style>
