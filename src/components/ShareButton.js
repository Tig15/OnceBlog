// src/components/ShareButton.js
import React from 'react';

const ShareButton = ({ title, url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url,
      });
    }
  };

  return (
    <button
      className="button"
      style={{
        margin:'10px',
        backgroundColor: '#3182ce',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        border: 'none',
        marginRight: '0.5rem',
      }}
      onClick={handleShare}
    >
      Share
    </button>
  );
};

export default ShareButton;
