<template>
  <div>
    <form @submit.prevent="" class="tw-p-4">
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-12">
        <img class="tw-w-10" src="@/assets/img/logo.png" alt="info" />
        <div>
          <p>{{ email }}</p>
          <p class="tw-text-blue">
            Pay {{ formatCurrency(depositeStatus?.amount, 2, "NGN") }}
          </p>
        </div>
      </div>
      <h3 class="tw-text-sm tw-mb-4">Enter your card details</h3>
      <NumberInput
        placeHolder="0000 0000 0000 0000"
        label="card number"
        type="number"
        fieldType="tokenAmount"
        :showLabel="true"
        name="card number"
        id="cardNumber"
        @set="setCardNumber"
      />
      <div
        class="tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-4 tw-mt-4"
      >
        <NumberInput
          placeHolder="MM/YY"
          label="card expiry"
          type="number"
          fieldType="cardExpiry"
          :showLabel="true"
          name="card expiry"
          id="cardExpiry"
          @set="setCardExpiryNumber"
        />
        <NumberInput
          placeHolder="123"
          label="cvv"
          type="number"
          fieldType="cvv"
          :showLabel="true"
          name="cvv"
          id="cvv"
          @set="setCvvNumber"
        />
      </div>
      <div class="tw-flex tw-gap-8 tw-mt-12">
        <Btn title="Pay" :amount="depositeStatus?.amount" @click="pay" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MediumModal from "@/components/general/MediumModal.vue";
import NumberInput from "@/components/general/NumberInput.vue";
import Btn from "@/components/general/BtnComponent.vue";
import { formatCurrency } from "@/utils/helpers.js";

export default {
  name: "CardPopup",

  components: {
    MediumModal,
    NumberInput,
    Btn,
  },

  props: {
    email: { type: String, default: () => "", required: true },
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      depositeStatus: (state) => state.depositeStatus,
    }),
  },

  methods: {
    formatCurrency,

    pay() {},

    setCardNumber() {},

    setCvvNumber() {},

    setCardExpiryNumber() {},

    reload() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
