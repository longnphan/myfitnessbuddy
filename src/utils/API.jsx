import axios from "axios";

const apiId = import.meta.env.VITE_API_ID;
const apiKey = import.meta.env.VITE_API_KEY;

export const searchFoods = async query => {
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}&ingr=${query}`;
  const response = await axios.get(url);

  return response.data.hints;
};

export const getExercise = () => {
  return axios.post(``);
};
