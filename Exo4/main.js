const LAT_PARIS = 48.8534;
const LONG_PARIS = 2.3488;

const LAT_LYON = 45.75;
const LONG_LYON = 4.85;

const LAT_NANTES = 47.2173;
const LONG_NANTES = -1.5534;

const LAT_MARSEILLE = 43.3;
const LONG_MARSEILLE = 5.4;

const LAT_LILLE = 50.633333;
const LONG_LILLE = 3.066667;

const fetchWeather = async (lat, long, ville) => {
  let resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,rain`
  );

  let json = await resp.json();
  console.log(json);

  document.getElementById(`pluie_${ville}`).innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById(`degres_${ville}`).innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";
};

fetchWeather(LAT_PARIS, LONG_PARIS, "paris");
fetchWeather(LAT_LYON, LONG_LYON, "lyon");
fetchWeather(LAT_NANTES, LONG_NANTES, "nantes");
fetchWeather(LAT_MARSEILLE, LONG_MARSEILLE, "marseille");
fetchWeather(LAT_LILLE, LONG_LILLE, "lille");
