<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  mounted() {
    this.getDepositeStatus(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getDepositeStatus"]),
  },
};
</script>

<style lang="scss"></style>
