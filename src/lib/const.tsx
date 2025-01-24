import { getWeatherInfo } from "./controllers/weather-controller";

const nigeria = await getWeatherInfo("Nigeria");
const durban = await getWeatherInfo("Durban");
const india = await getWeatherInfo("India");

export const DUMMYDATA: WeatherCardProps[] = [
  {
    location: nigeria.name,
    temperature: nigeria.main.temp,
  },
  {
    location: durban.name,
    temperature: durban.main.temp,
  },
  { location: india.name, temperature: india.main.temp },
];
