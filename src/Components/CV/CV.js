import React, { useState } from 'react';
import cv_img from '../../images/Screenshot (160).png';
import './CV.css';

const CV = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, loading, success, error

  const handleDownload = () => {
    setDownloadStatus('loading');
    
    // Define the relative path to the CV document
    const cv_path = '../../MY_CV/my cv.docx';

    // Fetch the CV document using the defined path
    fetch(cv_path)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        // Create a temporary URL for the Blob
        const temp_url = URL.createObjectURL(blob);

        // Create an <a> element to initiate download
        const a = document.createElement("a");
        a.href = temp_url;
        a.download = "my cv.docx";
        a.target = "_blank";
        a.click();

        // Revoke the temporary URL to free up memory
        URL.revokeObjectURL(temp_url);
        
        // Show success state briefly
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus('idle'), 2000);
      })
      .catch((error) => {
        console.error("Error downloading the CV:", error);
        setDownloadStatus('error');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      });
  };

  const getButtonText = () => {
    switch (downloadStatus) {
      case 'loading':
        return 'Downloading...';
      case 'success':
        return 'Downloaded!';
      case 'error':
        return 'Try Again';
      default:
        return 'Download CV';
    }
  };

  return (
    <div className='cv-container'>
      <div className='cv-image-container' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <img src={cv_img} alt='CV preview' />
      </div>
      
      <div className='cv-actions' data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">
        <button
          className={`download-button ${downloadStatus}`}
          onClick={handleDownload}
          disabled={downloadStatus === 'loading'}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default CV;
