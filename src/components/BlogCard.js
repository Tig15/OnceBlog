// src/components/BlogCard.js
import React from 'react';

const BlogCard = ({ title, description, image }) => {
  return (
    <div className="blog-card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
