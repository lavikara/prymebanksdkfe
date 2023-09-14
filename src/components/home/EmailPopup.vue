<template>
  <div>
    <!-- <Teleport to="#teleport-modal"> -->
    <SmallModal @close="removeIframe">
      <template v-slot:content>
        <form @submit.prevent="">
          <img
            class="tw-w-20 tw-mb-12 tw-mx-auto"
            src="@/assets/img/logo.png"
            alt="info"
          />
          <EmailInput
            placeHolder="Enter email address"
            label="Enter email to get your receipt"
            :email="payload.email"
            :error="emailError || {}"
            @set="setEmail"
            @validate="validateMethod"
          />
          <div class="tw-flex tw-gap-8 tw-mt-12">
            <Btn title="Pay" :amount="depositeStatus?.amount" />
          </div>
        </form>
      </template>
    </SmallModal>
    <!-- </Teleport> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import SmallModal from "@/components/general/SmallModal.vue";
import EmailInput from "@/components/general/EmailInput.vue";
import Btn from "@/components/general/BtnComponent.vue";
import { formatCurrency } from "@/utils/helpers.js";

export default {
  name: "EmailPopup",

  emits: ["valid"],

  components: {
    SmallModal,
    EmailInput,
    Btn,
  },

  data() {
    return {
      v$: useValidate(),
      payload: { email: "" },
      emailError: {},
      validate: false,
    };
  },

  validations() {
    return {
      payload: {
        email: { required, email },
      },
    };
  },

  computed: {
    ...mapState({
      depositeStatus: (state) => state.depositeStatus,
    }),
  },

  methods: {
    formatCurrency,

    validateMethod(field) {
      if (this.validate === true) return;
      this.validate = true;
      switch (field) {
        case "Enter email address":
          this.v$.$reset();
          this.v$.payload.email.$touch();
          if (this.v$.$errors.length === 0) {
            this.emailError = {};
            this.$emit("valid", { email: this.payload.email });
            return;
          }
          this.emailError = this.v$.$errors[0];
          break;

        default:
          break;
      }
    },
    removeIframe() {
      console.log(location.ancestorOrigins);
      location.replace(location.ancestorOrigins[0]);
      location.reload();
    },

    setEmail(email) {
      this.payload.email = email;
      this.validate = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
