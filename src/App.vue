<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  mounted() {
    this.getDepositeStatus(this.$route.params.id);
    window.parent.postMessage({
      type: "pryme.widget.closed",
      data: "cancelled",
    });
    // window?.parent?.postMessage(
    //   {
    //     type: "pryme.completed_payment",
    //     data: {
    //       status: this.completeOrder.paymentStatus,
    //       zillaOrderCode: this.completeOrder.orderCode,
    //       clientOrderReference: this.completeOrder.clientOrderReference,
    //     },
    //   },
    //   "*"
    // );
  },

  methods: {
    ...mapActions(["getDepositeStatus"]),
  },
};
</script>

<style lang="scss"></style>
