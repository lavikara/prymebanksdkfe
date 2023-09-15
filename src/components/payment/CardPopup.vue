<template>
  <div>
    <form @submit.prevent="">
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
import { mapState } from "vuex";
import MediumModal from "@/components/general/MediumModal.vue";
import NumberInput from "@/components/general/NumberInput.vue";
import Btn from "@/components/general/BtnComponent.vue";

export default {
  name: "CardPopup",

  components: {
    MediumModal,
    NumberInput,
    Btn,
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
    pay() {},

    setCardNumber() {},

    setCvvNumber() {},

    setCardExpiryNumber() {},
  },
};
</script>

<style lang="scss" scoped></style>
