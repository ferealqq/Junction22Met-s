import axios from "axios";

const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NmM0MDdkLTNiY2ItNDA4OC1iN2IzLWRlODlkZGY3NDdhMiIsImV4cCI6MTY2ODMwNzk3NywiaWF0IjoxNjY3NzAzMTc3fQ.H-FuxYAL_j5QgLXS4TaskGT2lQe3lDBmlkozmn-VHJ59MqKiYzNmuxISf82nRDTesPeuST7_xWtme2gBQSit6kSOU3P4KgtjZSvGOynsj_mIRHlD5bSV5RHUMfStG1CFJqtKpKEx9xCfFgjNByosuWe79vyn5lqPVabdoknvJSVr371bCrzewLevzqIaEATdjDDtbg8p4hDFVmbLtcvN46-0U1HS_c4zcOIJY6gPK1mu9nMnXe31wrzvsLWlvURENsb-kFx42Sj8qcDOHAKSLvdVOCwh_2a8pgMPLgCXeHFOn1oVnAnkEucs8QFdz6v2Zy4uBClBa_xG6PnqiKlB7A`;

export const api = axios.create({
  baseURL: `https://metsabakkari.fly.dev/api/`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchEmissionAnalytics = () => {
  return api.get("tasks/emission/analytics").then(({ data }) => data);
};

export const fetchSpendingAnalytics = () => {
  return api.get("tasks/money/analytics").then(({ data }) => data);
};

export const fetchUserData = () => {
  return api.get(`user/user`).then(({ data }) => data);
};

export const fetchCommunityData = () => {
  return api.get(`communities/get`);
};

export const fetchTasks = () => {
  return api.get("tasks/active").then(({ data }) => data);
};

export const sendCompleteTask = (id: string) => {
  return api.post(`tasks/complete/${id}`).then(({ data }) => data);
};

export const loginUser = (username: string) => {
  return api.post("user/login", { username }).then(({ data }) => data);
};

export const postCommunity = (names: any) => {
  return api.post("communities",names
  ).then(({data}) => data)
}