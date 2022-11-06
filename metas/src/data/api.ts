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

// export const api = (token: string = "") =>
//   axios.create({
//     baseURL: `https://metsabakkari.fly.dev/api/`,
//     headers: {
//       // Authorization: localToken ? `Bearer ${localToken}` : `Bearer ${token}`,
//       Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0OWRhYmFlLTNlZjctNGI4Mi1hMDY2LTIwMTU4YmVjMzZlZiIsImV4cCI6MTY2ODMyMzI2OSwiaWF0IjoxNjY3NzE4NDY5fQ.neyf6G_lQ7_J8WX_x0BQTpzp_QiFy03cloZPJywkA2akKKl3J4bqWBweuUh_oQFXoYXHAekYb9CGGNTXCqCAFikTwDwiePhtHk6tuegWaHV7FWXeQpgH4YeVEcthRLZBUc3hy7U0QDvtG9ZI3GFUliXqJXqIWvhBoeAyC09VyNad77j3SSnxWPGVEWVIglmBHg1i16LsWi1QF5yh-AbQObacLQYT7mf7lBmY4jik6puYda4W8a6FEgiF53xkNt7AxM-zVqPGVUCnP4zMgGeS3PDm-n-xB0HMkarLQ407A4JB4U8ZOoVqL_uKYe-GukxQ8NCFoEi1VQFM2dm4zGge_A`
//     },
//   });

export const api = 
  axios.create({
    baseURL: `https://metsabakkari.fly.dev/api/`,
    headers: {
      // Authorization: localToken ? `Bearer ${localToken}` : `Bearer ${token}`,
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0OWRhYmFlLTNlZjctNGI4Mi1hMDY2LTIwMTU4YmVjMzZlZiIsImV4cCI6MTY2ODMyMzI2OSwiaWF0IjoxNjY3NzE4NDY5fQ.neyf6G_lQ7_J8WX_x0BQTpzp_QiFy03cloZPJywkA2akKKl3J4bqWBweuUh_oQFXoYXHAekYb9CGGNTXCqCAFikTwDwiePhtHk6tuegWaHV7FWXeQpgH4YeVEcthRLZBUc3hy7U0QDvtG9ZI3GFUliXqJXqIWvhBoeAyC09VyNad77j3SSnxWPGVEWVIglmBHg1i16LsWi1QF5yh-AbQObacLQYT7mf7lBmY4jik6puYda4W8a6FEgiF53xkNt7AxM-zVqPGVUCnP4zMgGeS3PDm-n-xB0HMkarLQ407A4JB4U8ZOoVqL_uKYe-GukxQ8NCFoEi1VQFM2dm4zGge_A`
    },
  });


export const fetchEmissionAnalytics = (token: string) => {
  return api
    .get("tasks/emission/analytics")
    .then(({ data }) => data);
};

export const fetchSpendingAnalytics = (token: string) => {
  return api
    .get("tasks/money/analytics")
    .then(({ data }) => data);
};

export const fetchUserData = (token: string) => {
  return api.get(`user/user`).then(({ data }) => data);
};

export const fetchCommunityData = (token: string) => {
  return api.get(`communities/get`);
};

export const fetchTasks = (token: string) => {
  return api
    .get("tasks/active")
    .then(({ data }) => data);
};

export const sendCompleteTask = (id: string, token: string) => {
  return api
    .post(`tasks/complete/${id}`)
    .then(({ data }) => data);
};

export const loginUser = (username: string) => {
  return api
    .post("user/login", { username })
    .then(({ data }) => data);
};

export const postCommunity = (names: any, token:string) => {
  return api.post("communities/create",names
  ).then(({data}) => data)
}

export const checkToken = (token:any) => {
  return api.post("user/ping").then(({data}) => data)
}