import { DateTime } from "luxon";

const API_KEY = 'daff1645154705f4c8621a6defd7849c';
const API_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(`${API_URL}/${infoType}`);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
        .then((res) => res.json());
};

const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: forecastToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });
    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: forecastToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    return { timezone, daily, hourly };
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lon, lat},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name, 
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {
            speed
        }
    } = data;

    const {main: details, icon} = weather[0];
    
    return { lon, lat, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, details, icon, speed };
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
        .then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat, 
        lon,
        exclude: "current,minutely,alerts", 
        units: searchParams.units 
    }).then(formatForecastWeather);

    return {...formattedCurrentWeather, ...formattedForecastWeather };
};

const forecastToLocalTime = (sec, zone, format = "'ccc, dd lll yyyy' | Local time: 'hh:mm a'") => DateTime
    .fromSeconds(sec)
    .setZone(zone)
    .toFormat(format);

export default getFormattedWeatherData;
