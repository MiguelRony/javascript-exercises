const convertToCelsius = function(fahrenheitTemperature) {
  let celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
  if(!Number.isInteger(celsiusTemperature)) return parseFloat(celsiusTemperature.toFixed(1));
  return celsiusTemperature;
};

const convertToFahrenheit = function(celsiusTemperature) {
  let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32
  if(!Number.isInteger(fahrenheitTemperature)) return parseFloat(fahrenheitTemperature.toFixed(1));
  return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
