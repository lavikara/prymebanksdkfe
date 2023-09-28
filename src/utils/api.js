import axios from "axios";

const baseUrl = `https://89b9edee-703c-4282-9ae2-bcc34a145627.mock.pstmn.io`;
const virtualAccountUrl = `${baseUrl}/virtual-accounts`;

export default {
  getDepositStatus(id) {
    return axios.get(`${virtualAccountUrl}/status?reference=${id}`, {});
  },
};
