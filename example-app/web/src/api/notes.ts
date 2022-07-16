import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const getNotes = async () => {
  const response = await axios.get(`${baseUrl}/notes`);
  return response.data;
};
