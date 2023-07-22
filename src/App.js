import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import BlogCard from './components/BlogCard';
import ShareButton from './components/ShareButton';
import CopyButton from './components/CopyButton';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    // Fetch latest dev.to articles
    axios
      .get('https://dev.to/api/articles?top=24') // Fetch top 24 articles
      .then((response) => {
        const data = response.data;
        setBlogs(data);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <h1 className="page-title">Once A Blog</h1>
      <div className="blog-grid">
        {currentBlogs.map((blog) => (
          <div key={blog.id}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.cover_image}
            />
            <div className="button-group">
              <ShareButton title={blog.title} url={blog.url} />
              <CopyButton textToCopy={blog.url} />
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
