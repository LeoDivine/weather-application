const apiSecret = process.env.API_SECRET;

export const getWeatherInfo = async (location: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiSecret}`
    );
    const data = await response.json();
    if (!response.ok) {
      console.log("Something went wrong");
      return;
    }
    return data;
  } catch (e) {
    console.log(e);
  }
};
