document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = 'c6639ad9001445229d5172704241408'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or invalid API key');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('city').textContent = `Weather in ${data.location.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('description').textContent = `Description: ${data.current.condition.text}`;
            document.getElementById('icon').src = data.current.condition.icon;
            document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('error').textContent = '';
        })
        .catch(error => {
            document.getElementById('weatherInfo').style.display = 'none';
            document.getElementById('error').textContent = error.message;
        });
});
