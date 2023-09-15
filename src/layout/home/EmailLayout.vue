<template>
  <div id="payment-details">
    <EmailPopup @valid="$router.push({ name: 'DefaultPaymentView' })" />
  </div>
</template>

<script>
import EmailPopup from "@/components/home/EmailPopup.vue";

export default {
  name: "EmailLayout",

  components: {
    EmailPopup,
  },
};
</script>

<style lang="scss"></style>
