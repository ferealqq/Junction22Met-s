import axios from "axios";

export function setCookie(name: string,value:any,days = 15) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name: string) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
let localToken = getCookie('token') || null;

export const api = (token: string = "") =>
  axios.create({
    baseURL: `https://metsabakkari.fly.dev/api/`,
    headers: {
      Authorization: localToken ? `Bearer ${localToken}` : `Bearer ${token}`,
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

export const fetchUserData = (token: string) => {
  return api(token).get(`user/user`).then(({ data }) => data);
};

export const fetchCommunityData = (token: string) => {
  return api(token).get(`communities/get`);
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

export const postCommunity = (names: any, token:string) => {
  return api(token).post("communities/create",names
  ).then(({data}) => data)
}

export const checkToken = () => {
  return api().post("user/ping").then(({data}) => data)
}