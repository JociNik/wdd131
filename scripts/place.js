const windChillElement = document.getElementById("wind-chill-factor");

const localTemperature = 10;
const localWind = 10;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
}

if (localTemperature <= 10 && localWind > 4.8) {
    let newVar = calculateWindChill(localTemperature, localWind);
    windChillElement.textContent = `${Math.round(newVar * 100) / 100} °C`
} else {
    windChillElement.textContent = "N/A";
}