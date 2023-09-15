import api from "@/utils/api";
import router from "@/router";

export const getDepositeStatus = async ({ state, commit }, payload) => {
  const response = await api.getDepositStatus(payload);
  const { data } = response;
  console.log(data);
  commit("SET_DEPOSIT_STATUS", data);
  if (state.email === "")
    router.push({
      name: "EmailLayout",
      params: { id: data.reference },
    });
};

export const setEmail = async ({ commit }, payload) => {
  commit("SET_EMAIL", payload);
};
