import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import UpdateBlog from "./components/UpdateBlog";
const Home = () => {
  const [currentRow, setCurrentRow] = useState({});
  const [visible, setVisible] = useState(false);

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

  // handle DELETE
  const handleDelete = (id) => {
    const newBlogs = blog.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  // handle UPDATE & CREATE
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArray = [
      ...blog,
      {
        author: e.target.author.value,
        title: e.target.title.value,
        id: Math.random(),
      },
    ];
    setBlogs(newArray);
  };

  const handleVisibleUpdate = (value) => {
    setCurrentRow(value);
    setVisible(true);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(e.target.author.value);
    //  Create a new array with the updated object
    const data = {
      author: e.target.author.value,
      title: e.target.title.value,
      id: currentRow.id,
    };
    const newData = blog.map((item) => {
      if (item.id === currentRow.id) {
        return { ...item, ...data };
      }
      return item;
    });

    // Update the state with the new array
    setBlogs(newData);

    setVisible(!visible);
  };

  return (
    <div className="home">
      <CreateBlog handleSubmit={handleSubmit} data={currentRow} />
      {visible ? (
        <UpdateBlog currentRow={currentRow} handleUpdate={handleUpdate} />
      ) : null}

      <BlogList
        blog={blog}
        title={"All Blogs"}
        handleDelete={handleDelete}
        setCurrentRow={setCurrentRow}
        handleVisibleUpdate={handleVisibleUpdate}
      />
      <BlogList
        blog={blog.filter((blog) => blog.author === "Salen")}
        title={"Salens Blog"}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
