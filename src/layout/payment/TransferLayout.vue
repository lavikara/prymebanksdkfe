<template>
  <div id="transfer-layout">
    <TransferPopup />
  </div>
</template>

<script>
import TransferPopup from "@/components/payment/TransferPopup.vue";

export default {
  name: "TransferLayout",

  components: {
    TransferPopup,
  },
};
</script>

<style lang="scss" scoped></style>
