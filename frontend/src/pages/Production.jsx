import {
  TrendingUp,
  Sprout,
  MapPin,
  Target,
  ArrowUpRight,
  Download,
  ChevronLeft,
} from "lucide-react";

import "./Production.css";
import { Link } from "react-router-dom";

function Production() {
  return (
    <div className="production-page">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <div className="logo-icon">
            🌱
          </div>

          <div>
            <h2>Krishi</h2>
            <span>Sahayak</span>
          </div>
        </div>

       <nav className="sidebar-menu">

  <Link to="/dashboard">
    🏠 Dashboard
  </Link>

  <Link to="/upload">
    📷 Crop Analysis
  </Link>

  <Link to="/production" className="active">
    📈 Production
  </Link>

  <Link to="/weather">
    🌦️ Weather
  </Link>

</nav>

        <button className="logout">
          ↪ Logout
        </button>

      </aside>


      {/* Main Content */}
      <main className="production-content">

        {/* Header */}
        <header className="production-header">

          <div>
            <div className="back">
              <ChevronLeft size={18} />
              Production
            </div>

            <h1>Production Prediction</h1>

            <p>
              AI-powered prediction for your crop production
            </p>
          </div>

          <button className="download-btn">
            <Download size={18} />
            Download Report
          </button>

        </header>


        {/* Crop Info */}
        <section className="crop-banner">

          <div className="crop-image">
            🌱
          </div>

          <div className="crop-info">
            <span>Selected Crop</span>

            <h2>Tomato</h2>

            <p>
              <MapPin size={15} />
              Uttar Pradesh
            </p>
          </div>

          <div className="prediction-status">
            <span>Prediction Status</span>

            <strong>
              ✓ Healthy Prediction
            </strong>
          </div>

        </section>


        {/* Main Result */}
        <section className="main-result">

          <div className="result-heading">
            <div className="result-icon">
              <TrendingUp size={26} />
            </div>

            <div>
              <span>Expected Production</span>

              <h2>4.8 Tons / Acre</h2>

              <p>
                <ArrowUpRight size={16} />
                12% higher than average
              </p>
            </div>
          </div>

          <div className="confidence">
            <span>Model Confidence</span>

            <strong>91%</strong>

            <div className="progress">
              <div></div>
            </div>
          </div>

        </section>


        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">
              <Sprout size={22} />
            </div>

            <div>
              <span>Predicted Yield</span>
              <h3>9.6 Tons</h3>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">
              <Target size={22} />
            </div>

            <div>
              <span>Cultivation Area</span>
              <h3>2 Acres</h3>
            </div>
          </div>


          <div className="stat-card">

            <div className="stat-icon">
              📅
            </div>

            <div>
              <span>Harvest Time</span>
              <h3>85 Days</h3>
            </div>

          </div>

        </section>


        {/* Forecast Chart */}
        <section className="chart-card">

          <div className="section-heading">

            <div>
              <h2>Production Forecast</h2>

              <p>
                Estimated crop production over the growing period
              </p>
            </div>

            <select>
              <option>Production</option>
              <option>Yield</option>
            </select>

          </div>


          <div className="chart">

            <div className="chart-line">

             <div className="point p1" data-value="1.2T"></div>
<div className="point p2" data-value="2.1T"></div>
<div className="point p3" data-value="3.4T"></div>
<div className="point p4" data-value="4.1T"></div>
<div className="point p5" data-value="4.8T"></div>

            </div>

            <div className="chart-labels">
              <span>Month 1</span>
              <span>Month 2</span>
              <span>Month 3</span>
              <span>Month 4</span>
              <span>Harvest</span>
            </div>

          </div>

        </section>


        {/* Recommendations */}
        <section className="recommendation-card">

          <div className="recommendation-title">
            <span>🌿</span>

            <div>
              <h2>Production Recommendations</h2>

              <p>
                Improve your expected crop yield with these practices.
              </p>
            </div>
          </div>


          <div className="recommendations">

            <div>
              <strong>💧 Proper Irrigation</strong>
              <p>
                Maintain adequate soil moisture throughout the crop cycle.
              </p>
            </div>

            <div>
              <strong>🧪 Balanced Fertilization</strong>
              <p>
                Follow the recommended fertilizer schedule.
              </p>
            </div>

            <div>
              <strong>🔍 Crop Monitoring</strong>
              <p>
                Regularly monitor your crop for diseases and pests.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Production;