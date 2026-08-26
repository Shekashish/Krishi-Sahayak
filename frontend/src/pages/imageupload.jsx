import { useRef, useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Camera,
  X,
  ArrowRight,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import "./ImageUpload.css";

function ImageUpload() {
  const fileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [cropType, setCropType] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    setSelectedImage(URL.createObjectURL(file));
    setFileName(file.name);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const removeImage = () => {
    setSelectedImage(null);
    setFileName("");
  };

  const handleAnalyze = (event) => {
    event.preventDefault();

    if (!selectedImage) {
      alert("Please upload a crop image first.");
      return;
    }

    if (!cropType) {
      alert("Please select your crop type.");
      return;
    }

    alert("Image ready for analysis!");
  };

  return (
    <div className="upload-page">

      {/* Top Navigation */}
      <header className="upload-header">

        <div className="upload-brand">
          <div className="upload-brand-icon">
            <Leaf size={20} />
          </div>

          <span>Krishi Sahayak</span>
        </div>

        <div className="upload-header-right">
          <span className="secure-text">
            <ShieldCheck size={15} />
            Your images are secure
          </span>

          <div className="upload-profile">
            <div className="upload-avatar">F</div>

            <div>
              <strong>Farmer</strong>
              <small>Farm Owner</small>
            </div>
          </div>
        </div>

      </header>


      {/* Main */}
      <main className="upload-main">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          Dashboard
          <span>/</span>
          <strong>Disease Check</strong>
        </div>


        {/* Intro */}
        <div className="upload-intro">

          <div>
            <p className="upload-label">
              CROP HEALTH
            </p>

            <h1>
              Check your crop
            </h1>

            <p className="upload-description">
              Upload a clear image of your crop or leaf and
              let Krishi Sahayak help identify possible diseases.
            </p>
          </div>

        </div>


        {/* Content */}
        <div className="upload-layout">

          {/* Upload Card */}
          <section className="upload-card">

            <div className="card-title">
              <div>
                <h2>Upload crop image</h2>
                <p>
                  Use a clear, well-lit photo for better results.
                </p>
              </div>

              <div className="title-icon">
                <ImageIcon size={20} />
              </div>
            </div>


            {!selectedImage ? (

              <div
                className="drop-zone"
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />

                <div className="upload-icon">
                  <Upload size={25} />
                </div>

                <h3>
                  Drop your image here
                </h3>

                <p>
                  or <span>browse from your device</span>
                </p>

                <small>
                  JPG, JPEG or PNG · Max 10 MB
                </small>

              </div>

            ) : (

              <div className="image-preview-container">

                <img
                  src={selectedImage}
                  alt="Selected crop"
                  className="image-preview"
                />

                <button
                  className="remove-image"
                  onClick={removeImage}
                  type="button"
                >
                  <X size={18} />
                </button>

                <div className="image-file-name">
                  <ImageIcon size={16} />
                  {fileName}
                </div>

              </div>

            )}


            {/* Crop Selection */}
            <div className="crop-selection">

              <label htmlFor="crop">
                What crop is this?
              </label>

              <select
                id="crop"
                value={cropType}
                onChange={(event) => setCropType(event.target.value)}
              >
                <option value="">
                  Select crop type
                </option>

                <option value="wheat">
                  Wheat
                </option>

                <option value="rice">
                  Rice
                </option>

                <option value="maize">
                  Maize
                </option>

                <option value="cotton">
                  Cotton
                </option>

                <option value="tomato">
                  Tomato
                </option>

                <option value="potato">
                  Potato
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            {/* Analyze */}
            <button
              className="analyze-button"
              onClick={handleAnalyze}
            >
              Analyze Crop
              <ArrowRight size={18} />
            </button>

          </section>


          {/* Right Information */}
          <aside className="upload-info">

            <div className="info-card">

              <div className="info-heading">
                <div className="camera-icon">
                  <Camera size={20} />
                </div>

                <div>
                  <h3>
                    For best results
                  </h3>

                  <p>
                    Follow these simple tips
                  </p>
                </div>
              </div>


              <div className="tip-list">

                <div className="tip">
                  <span>01</span>

                  <div>
                    <strong>Use good lighting</strong>
                    <p>
                      Avoid dark or heavily shadowed images.
                    </p>
                  </div>
                </div>


                <div className="tip">
                  <span>02</span>

                  <div>
                    <strong>Focus on the affected area</strong>
                    <p>
                      Keep the diseased leaf or crop clearly visible.
                    </p>
                  </div>
                </div>


                <div className="tip">
                  <span>03</span>

                  <div>
                    <strong>Keep the image sharp</strong>
                    <p>
                      Avoid blurry or distant photographs.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            <div className="privacy-card">

              <ShieldCheck size={20} />

              <div>
                <strong>Your privacy matters</strong>

                <p>
                  Your uploaded image is used only for
                  crop analysis.
                </p>
              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default ImageUpload;