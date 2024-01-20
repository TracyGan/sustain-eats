import "./create-post.css";
import { useState } from "react";
// import PreviewImage from "./PreviewImage";

const Image = () => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  return (
    <div className="image">
      <div className="container">
        <div className="row align-items-center mt-5">
          <div className="col-10 mt-5">
            <div className="image-container mt-5">
              <div
                className="image-upload-container"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
              >
                <label className="image-upload-label">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="image-upload-input"
                  />
                  <div className="image-preview">
                    {image && (
                      <img
                        src={image}
                        alt="Preview"
                        className="preview-image"
                      />
                    )}
                    {!image && <i className="bi bi-upload mb-2"></i>}
                    {!image && (
                      <p className="image-word">
                        Choose a file or drag it here
                      </p>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* <div className="offset-md-2 col-6 align-self-center mt-5">
            <button type="btn" className="btn btn-pill">
              Upload Image
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Image;
