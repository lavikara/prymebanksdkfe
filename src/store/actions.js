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

export const startCountdown = async ({ state, commit }, payload) => {
  if (state.depositeStatus === undefined) return;
  const countDownDate = new Date(state.depositeStatus?.expiry_date).getTime();
  const countdown = setInterval(function () {
    const now = new Date().getTime();

    const difference = countDownDate - now;
    let timer = "";
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    timer = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    commit("SET_COUNTDOWN", timer);

    if (difference < 0) {
      clearInterval(countdown);
      timer = "EXPIRED";
      commit("SET_COUNTDOWN", timer);
    }
  }, 1000);
};
