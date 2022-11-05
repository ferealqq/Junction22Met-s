import axios from "axios";

export const getTasks = async () => {
  const response = await axios.get("http://localhost:3004/tasks");
  return response.data;
};
