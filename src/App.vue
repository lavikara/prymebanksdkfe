<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  mounted() {
    this.getDepositeStatus(this.$route.params.id);
    console.log(document.getElementById("pryme--app-loader"));
    document.getElementById("pryme--app-loader").remove();
  },

  methods: {
    ...mapActions(["getDepositeStatus"]),
  },
};
</script>

<style lang="scss"></style>
