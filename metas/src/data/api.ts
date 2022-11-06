import axios from "axios";

export const api = (token: string) =>
  axios.create({
    baseURL: `https://metsabakkari.fly.dev/api/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const fetchEmissionAnalytics = (token: string) => {
  return api(token)
    .get("tasks/emission/analytics")
    .then(({ data }) => data);
};

export const fetchSpendingAnalytics = (token: string) => {
  return api(token)
    .get("tasks/money/analytics")
    .then(({ data }) => data);
};

export const fetchUserData = () => {
  return api.get(`user/user`).then(({ data }) => data);
};

export const fetchCommunityData = () => {
  return api.get(`communities/get`);
};

export const fetchTasks = (token: string) => {
  return api(token)
    .get("tasks/active")
    .then(({ data }) => data);
};

export const sendCompleteTask = (id: string, token: string) => {
  return api(token)
    .post(`tasks/complete/${id}`)
    .then(({ data }) => data);
};

export const loginUser = (username: string) => {
  return api("")
    .post("user/login", { username })
    .then(({ data }) => data);
};

export const postCommunity = (names: any) => {
  return api.post("communities",names
  ).then(({data}) => data)
}