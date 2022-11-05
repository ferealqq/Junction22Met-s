import axios from 'axios';

const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5NDYyZGIxLTMzMTgtNGJhMC1iZTQ1LWMyMzJjNmE0NTZhOCIsImV4cCI6MTY2ODI2NTY3OCwiaWF0IjoxNjY3NjYwODc4fQ.Odb8vnp5OSJMKPOykSJ_Qh41_CsCTMZe9j2kEEqJ0Pk6pOOvHZe1R2B3uB2SqG3EiQRVf2bEvtqJKcoUeKs4I7ooJCCEqUPjxuF41qWmE_GOFjMP6xpTOm_k2XSSooAAB8ArJIbcY0HNo917Fu6gt0vANY4IFRlDG24ax0Kl8hWuXySyz-5HX_HwfDEzD5rzjfVuTk1sJpMEh6Sp3XOO0WcY3aoYqMggMPlTKMEd1V7VZz6cncwNbhQ2zUjDuTJhSqbC37nzJ40rHVbeTJMX-uC-i7W2APC4ax-lrtW8MpvqTZ3NlMi2Rl88Z7XSiDmV-W4YZfxiNmRdJosE6gNAAA`;

export const api = axios.create({
  baseURL: `https://metsabakkari.fly.dev/api/`,
  headers: {
    "Authorization": `Bearer ${token}`
  }
})


export const fetchAnalytics = () => {
  return api.get("tasks/user/analytics").then(({data}) => data)
};