import React, { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blog, setBlogs] = useState([
    {
      title: "my new website",
      body: "lorem ipsum",
      author: "Mediavillo",
      id: 1,
    },
    {
      title: "my new website",
      body: "lorem ipsum",
      author: "Buenaventura",
      id: 2,
    },
    {
      title: "my new website",
      body: "lorem ipsum",
      author: "Salen",
      id: 3,
    },
    {
      title: "my new website",
      body: "lorem ipsum",
      author: "Salen",
      id: 4,
    },
  ]);

  const handleDelete = (id) => {
    console.log(id);
    const newBlogs = blog.filter((blog) => blog.id !== id);
    console.log(newBlogs);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blog={blog} title={"All Blogs"} handleDelete={handleDelete} />
      <BlogList
        blog={blog.filter((blog) => blog.author === "Salen")}
        title={"All Blogs"}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
