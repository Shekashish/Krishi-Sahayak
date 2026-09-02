import {
  CloudSun,
  Droplets,
  Wind,
  CloudRain,
  MapPin,
  Sun,
  Cloud,
  CloudDrizzle,
  Sprout,
  Waves,
  AlertTriangle,
} from "lucide-react";

import "./Weather.css";
import { Link } from "react-router-dom";

function Weather() {
  const forecast = [
    { day: "Today", icon: <Sun />, temp: "28°", condition: "Sunny" },
    { day: "Tue", icon: <CloudSun />, temp: "29°", condition: "Partly Cloudy" },
    { day: "Wed", icon: <CloudRain />, temp: "25°", condition: "Rainy" },
    { day: "Thu", icon: <Sun />, temp: "30°", condition: "Sunny" },
    { day: "Fri", icon: <CloudSun />, temp: "29°", condition: "Cloudy" },
  ];

  return (
    <div className="weather-page">

      {/* SIDEBAR */}
      <aside className="weather-sidebar">

        <div className="weather-logo">
          <div className="weather-logo-icon">🌱</div>

          <div>
            <h2>Krishi</h2>
            <span>Sahayak</span>
          </div>
        </div>

        <nav className="weather-menu">

  <Link to="/dashboard">
    🏠 Dashboard
  </Link>

  <Link to="/upload">
    📷 Crop Analysis
  </Link>

  <Link to="/production">
    📈 Production
  </Link>

  <Link to="/weather" className="active">
    🌦️ Weather
  </Link>

</nav>

        <button className="weather-logout">
          ↪ Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="weather-content">

        {/* HEADER */}
        <header className="weather-header">

          <div>
            <span className="weather-location">
              <MapPin size={15} />
              Uttar Pradesh, India
            </span>

            <h1>Weather Dashboard</h1>

            <p>
              Stay updated with weather conditions for better farming decisions.
            </p>
          </div>

          <div className="weather-update">
            <span>Last updated</span>
            <strong>Today, 10:30 AM</strong>
          </div>

        </header>


        {/* CURRENT WEATHER */}
        <section className="current-weather">

          <div className="current-weather-left">

            <div className="weather-icon-large">
              <Sun size={58} />
            </div>

            <div>
              <span>Current Weather</span>

              <div className="temperature">
                28<span>°C</span>
              </div>

              <h3>Sunny</h3>

              <p>Feels like 30°C</p>
            </div>

          </div>


          <div className="weather-stats">

            <div className="weather-stat">
              <Droplets size={21} />
              <div>
                <span>Humidity</span>
                <strong>64%</strong>
              </div>
            </div>

            <div className="weather-stat">
              <Wind size={21} />
              <div>
                <span>Wind Speed</span>
                <strong>12 km/h</strong>
              </div>
            </div>

            <div className="weather-stat">
              <CloudRain size={21} />
              <div>
                <span>Rain Probability</span>
                <strong>20%</strong>
              </div>
            </div>

          </div>

        </section>


        {/* FORECAST */}
        <section className="forecast-card">

          <div className="weather-section-title">
            <div>
              <h2>5-Day Forecast</h2>
              <p>Weather prediction for the upcoming days</p>
            </div>
          </div>


          <div className="forecast-grid">

            {forecast.map((item, index) => (
              <div
                className={`forecast-item ${
                  index === 0 ? "today" : ""
                }`}
                key={item.day}
              >

                <span className="forecast-day">
                  {item.day}
                </span>

                <div className="forecast-icon">
                  {item.icon}
                </div>

                <strong>{item.temp}</strong>

                <span className="forecast-condition">
                  {item.condition}
                </span>

              </div>
            ))}

          </div>

        </section>


        {/* FARMING INSIGHTS */}
        <section className="farming-section">

          <div className="weather-section-title">

            <div>
              <h2>Farming Weather Insights</h2>
              <p>
                AI-based suggestions based on current weather conditions
              </p>
            </div>

          </div>


          <div className="insights-grid">

            <div className="insight-card irrigation">

              <div className="insight-icon">
                <Droplets size={23} />
              </div>

              <div>
                <span>Irrigation</span>
                <h3>Recommended</h3>
                <p>
                  Current temperature and humidity indicate
                  that moderate irrigation is suitable.
                </p>
              </div>

            </div>


            <div className="insight-card rain">

              <div className="insight-icon">
                <CloudDrizzle size={23} />
              </div>

              <div>
                <span>Rain Forecast</span>
                <h3>Rain Expected</h3>
                <p>
                  Rain may occur tomorrow. Consider adjusting
                  your irrigation schedule.
                </p>
              </div>

            </div>


            <div className="insight-card crop">

              <div className="insight-icon">
                <Sprout size={23} />
              </div>

              <div>
                <span>Crop Protection</span>
                <h3>Normal</h3>
                <p>
                  Current weather conditions are suitable
                  for normal crop growth.
                </p>
              </div>

            </div>


            <div className="insight-card moisture">

              <div className="insight-icon">
                <Waves size={23} />
              </div>

              <div>
                <span>Soil Moisture</span>
                <h3>Moderate</h3>
                <p>
                  Monitor soil moisture regularly and avoid
                  excessive watering.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* WEATHER ALERT */}
        <section className="weather-alert">

          <div className="alert-icon">
            <AlertTriangle size={22} />
          </div>

          <div>
            <strong>Weather Advisory</strong>

            <p>
              Rainfall is expected in the coming days.
              Plan irrigation and fertilizer application accordingly.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Weather;