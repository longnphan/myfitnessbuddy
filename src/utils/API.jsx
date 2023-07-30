import axios from "axios";

const apiId = import.meta.env.VITE_API_ID;
const apiKey = import.meta.env.VITE_API_KEY;

export const searchFoods = async query => {
  const url = "https://api.edamam.com/api/food-database/v2/parser";

  const response = await axios.get(url, {
    params: {
      app_id: apiId,
      app_key: apiKey,
      ingr: query,
    },
  });

  return response.data.hints;
};
