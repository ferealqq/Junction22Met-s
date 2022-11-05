import axios from 'axios';

const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzNThjNTFiLTdkMDgtNGIwMy1iYWZlLWMyMjY2N2I4Mzc4NiIsImV4cCI6MTY2ODI3NTE1MSwiaWF0IjoxNjY3NjcwMzUxfQ.Ckz64W4CrTNiMCeBjDn5cEXtwFlhIm_A65LWoJpn7yVOe_JIf0x_ycua0qvDFoghtQXIzllBAO9kWwAWbbugBgAimk3o97NFC2owaUxQGG8IXEeioFuOl5RnJM_hLbWHv5pmaEbWDO1Y-M4OjcsT5s8wj4LsAPbHKaGsVedrqQhbkeaelpkYZYl-KIm1wLEivCAE4npXsZvFEUpnPy65BA-UiIkMtxJjwcqZwU6S4pNd6jpS2Qq2smpX81xU-GuUl3f3eVxScm_8VaTj6cseErFrAsOtgYy-BiFy-EQNYT_j9-D_dFstQKa6OmFgJC92HySnq-VnJ0Co7mq155x6QA`;

export const api = axios.create({
  baseURL: `https://metsabakkari.fly.dev/api/`,
  headers: {
    "Authorization": `Bearer ${token}`
  }
})


export const fetchAnalytics = () => {
  return api.get("tasks/user/analytics").then(({data}) => data)
};