import axios from "axios";

const baseUrl = `https://cfacd47d-1800-4897-a6cf-02209d194562.mock.pstmn.io/`;
const virtualAccountUrl = `${baseUrl}/virtual-accounts`;

export default {
  getDepositStatus(id) {
    return axios.get(`${virtualAccountUrl}/status?reference=${id}`, {});
  },
};
