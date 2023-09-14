<template>
  <div id="payment-details">
    <EmailPopup @valid="setEmail" />
    <!-- <div v-show="showPaymentDetails">
      <CardPopup
        class="tw-p-4"
        :email="payload.email"
        @valid="showPaymentDetails = !showPaymentDetails"
      />
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import EmailPopup from "@/components/home/EmailPopup.vue";

export default {
  name: "PaymentDetails",

  components: {
    EmailPopup,
    // CardPopup,
  },

  data() {
    return {
      payload: { email: "" },
      showPaymentDetails: false,
      showEmailPopup: true,
    };
  },

  computed: {
    ...mapState({
      depositeStatus: (state) => state.depositeStatus,
    }),
  },

  mounted() {
    this.getDepositeStatus(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getDepositeStatus"]),

    setEmail(payload) {
      this.payload.email = payload.email;
      this.$router.push({ name: "DefaultPayment" });
      // this.showPaymentDetails = true;
      // this.showEmailPopup = false;
    },
  },
};
</script>

<style lang="scss"></style>
