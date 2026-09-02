import {
  CloudSun,
  Droplets,
  Leaf,
  Camera,
  BarChart3,
  Cloud,
  Bell,
  ChevronRight,
  Sprout,
  ThermometerSun,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        {/* Logo */}
        <div className="sidebar-brand">
          <div className="brand-mark">
            <Leaf size={21} />
          </div>

          <span>Krishi Sahayak</span>
        </div>


        {/* Navigation */}
        <nav className="sidebar-nav">

          <p className="nav-label">MAIN MENU</p>

          <Link to="/dashboard" className="nav-item active">
            <BarChart3 size={19} />
            Dashboard
          </Link>

          <Link to="/upload" className="nav-item">
            <Sprout size={19} />
            My Crops
          </Link>

          <Link to="/upload" className="nav-item">
            <Camera size={19} />
            Disease Check
          </Link>

          <Link to="/weather" className="nav-item">
            <CloudSun size={19} />
            Weather
          </Link>

          <Link to="/production" className="nav-item">
            <BarChart3 size={19} />
            Yield Prediction
          </Link>


          <p className="nav-label settings-label">
            ACCOUNT
          </p>

          <a href="#" className="nav-item">
            ⚙
            Settings
          </a>

        </nav>


        {/* Help */}
        <div className="sidebar-bottom">

          <div className="help-box">

            <div className="help-icon">
              ?
            </div>

            <div>
              <strong>Need help?</strong>
              <span>Ask Krishi Sahayak</span>
            </div>

          </div>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className="dashboard-main">

        {/* Header */}
        <header className="dashboard-header">

          <div>

            <p className="page-date">
              WEDNESDAY, AUGUST 26, 2026
            </p>

            <h1>
              Good morning, Farmer <span>👋</span>
            </h1>

            <p className="header-subtitle">
              Here's what's happening with your farm today.
            </p>

          </div>


          <div className="header-actions">

            <button className="notification-button">
              <Bell size={19} />
              <span></span>
            </button>


            <div className="profile">

              <div className="profile-avatar">
                F
              </div>

              <div className="profile-info">
                <strong>Farmer</strong>
                <small>Farm Owner</small>
              </div>

            </div>

          </div>

        </header>


        {/* ================= OVERVIEW CARDS ================= */}
        <section className="overview-grid">

          {/* Weather */}
          <Link
            to="/weather"
            className="overview-card weather-card"
          >

            <div className="card-icon weather-icon">
              <CloudSun size={23} />
            </div>

            <div className="overview-content">

              <span>Today's Weather</span>

              <div className="weather-value">
                28°C
              </div>

              <small>
                Partly cloudy
              </small>

            </div>

            <div className="weather-meta">

              <span>
                <Droplets size={14} />
                68%
              </span>

            </div>

          </Link>


          {/* Active Crops */}
          <div className="overview-card">

            <div className="card-icon crop-icon">
              <Leaf size={22} />
            </div>

            <div className="overview-content">

              <span>Active Crops</span>

              <div className="big-number">
                03
              </div>

              <small>
                2 healthy · 1 needs attention
              </small>

            </div>

          </div>


          {/* Expected Yield */}
          <Link
            to="/production"
            className="overview-card"
          >

            <div className="card-icon yield-icon">
              <BarChart3 size={22} />
            </div>

            <div className="overview-content">

              <span>Expected Yield</span>

              <div className="big-number">
                82%
              </div>

              <small className="positive">
                ↑ 8% from last season
              </small>

            </div>

          </Link>

        </section>


        {/* ================= DASHBOARD GRID ================= */}
        <section className="dashboard-grid">


          {/* ================= CROP HEALTH ================= */}
          <div className="dashboard-card crop-health">

            <div className="section-heading">

              <div>
                <h2>Crop Health</h2>
                <p>Current condition of your crops</p>
              </div>

              <button className="view-all">
                View all
                <ChevronRight size={16} />
              </button>

            </div>


            <div className="crop-list">


              {/* Wheat */}
              <div className="crop-row">

                <div className="crop-image wheat">
                  🌾
                </div>

                <div className="crop-details">
                  <strong>Wheat</strong>
                  <span>Healthy</span>
                </div>

                <div className="health-score">

                  <div className="score-bar">
                    <span style={{ width: "92%" }}></span>
                  </div>

                  <strong>92%</strong>

                </div>

              </div>


              {/* Rice */}
              <div className="crop-row">

                <div className="crop-image rice">
                  🌱
                </div>

                <div className="crop-details">
                  <strong>Rice</strong>
                  <span>Healthy</span>
                </div>

                <div className="health-score">

                  <div className="score-bar">
                    <span style={{ width: "86%" }}></span>
                  </div>

                  <strong>86%</strong>

                </div>

              </div>


              {/* Maize */}
              <div className="crop-row">

                <div className="crop-image maize">
                  🌽
                </div>

                <div className="crop-details">

                  <strong>Maize</strong>

                  <span className="attention">
                    Needs attention
                  </span>

                </div>

                <div className="health-score">

                  <div className="score-bar warning">
                    <span style={{ width: "78%" }}></span>
                  </div>

                  <strong>78%</strong>

                </div>

              </div>

            </div>

          </div>


          {/* ================= QUICK ACTIONS ================= */}
          <div className="dashboard-card quick-actions">

            <div className="section-heading">

              <div>
                <h2>Quick Actions</h2>
                <p>Tools for your farm</p>
              </div>

            </div>


            {/* Disease Check */}
            <Link
              to="/upload"
              className="action-item"
            >

              <div className="action-icon camera-action">
                <Camera size={20} />
              </div>

              <div>
                <strong>Check Crop Disease</strong>
                <span>Upload a crop image</span>
              </div>

              <ChevronRight size={17} />

            </Link>


            {/* Weather */}
            <Link
              to="/weather"
              className="action-item"
            >

              <div className="action-icon weather-action">
                <CloudSun size={20} />
              </div>

              <div>
                <strong>Check Weather</strong>
                <span>View local forecast</span>
              </div>

              <ChevronRight size={17} />

            </Link>


            {/* Production */}
            <Link
              to="/production"
              className="action-item"
            >

              <div className="action-icon yield-action">
                <BarChart3 size={20} />
              </div>

              <div>
                <strong>Predict Production</strong>
                <span>Estimate your crop yield</span>
              </div>

              <ChevronRight size={17} />

            </Link>

          </div>

        </section>


        {/* ================= BOTTOM INFO ================= */}
        <section className="bottom-grid">


          {/* Farming Tip */}
          <div className="tip-card">

            <div className="tip-icon">
              <ThermometerSun size={22} />
            </div>

            <div>

              <span>FARMING TIP</span>

              <h3>
                Monitor soil moisture during warm days
              </h3>

              <p>
                Keeping your soil moisture balanced can
                help improve crop health and reduce water waste.
              </p>

            </div>

          </div>


          {/* Field Conditions */}
          <div className="weather-mini">

            <div className="weather-mini-header">

              <div>

                <span>FIELD CONDITIONS</span>

                <h3>
                  Today's conditions
                </h3>

              </div>

              <Cloud size={22} />

            </div>


            <div className="condition-row">
              <span>Temperature</span>
              <strong>28°C</strong>
            </div>


            <div className="condition-row">
              <span>Humidity</span>
              <strong>68%</strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;