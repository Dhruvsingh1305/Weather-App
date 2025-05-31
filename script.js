const apiKey = "3665d2d50a9e4653a6e134737253105";

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!location) {
    resultDiv.textContent = "Please enter a location.";
    return;
  }
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;


  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;

    resultDiv.innerHTML = `
      <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
  } catch (error) {
    resultDiv.textContent = "Error: " + error.message;
  }
}
