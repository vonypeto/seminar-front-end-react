import React from "react";

const BlogList = (props) => {
  const { blog, title, handleDelete, handleVisibleUpdate } = props;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>{" "}
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          <button
            onClick={() => {
              handleVisibleUpdate(blog);
            }}
          >
            update blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
