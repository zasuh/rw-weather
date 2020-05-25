import fetch from 'node-fetch'

export const getWeather = async ({ zip }) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=630dc595ee386228a296c035266cca84`
  )
  const json = await response.json()

  if (json.code === '404') {
    return new Error(`${zip} isn't a valid US zip code, please try again`)
  }

  return {
    zip,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(((json.main.temp - 273.15) * 9) / 5 + 32),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}
