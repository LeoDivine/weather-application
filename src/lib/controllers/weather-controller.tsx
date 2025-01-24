import NotFound from "@/app/search/not-found";

const apiSecret = process.env.API_SECRET;

export const getWeatherInfo = async (location: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiSecret}`
    );
    const data = await response.json();
    if (!response.ok) {
      return undefined;
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllLocation = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather&appid=${apiSecret}`
    );
    const data = await response.json();
    if (!response.ok) {
      return undefined;
    }
    return data.name;
  } catch (e) {
    console.log(e);
  }
};
