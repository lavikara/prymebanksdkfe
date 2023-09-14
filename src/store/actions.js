import api from "@/utils/api";

export const getDepositeStatus = async ({ commit }, payload) => {
  const response = await api.getDepositStatus(payload);
  const { data } = response;
  console.log(data);
  commit("SET_DEPOSIT_STATUS", data);
};
