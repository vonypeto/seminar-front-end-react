import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import CreateBlog from "./components/CreateBlog";
import UpdateBlog from "./components/UpdateBlogAnt";
import { Modal, Form } from "antd";

const Home = () => {
  const [currentRow, setCurrentRow] = useState({});
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
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
  // handle CREATE
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
    form.setFieldsValue(value);
    setCurrentRow(value);
    setVisible(true);
  };
  const handleVisibleClose = () => {
    setVisible(!true);
  };
  // handle UPDATE
  const handleUpdate = (e) => {
    console.log(e);

    //  Create a new array with the updated object
    const data = {
      author: e.author,
      title: e.title,
      id: e.id,
    };
    const newData = blog.map((item) => {
      if (item.id === e.id) {
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

      <UpdateBlog
        currentRow={currentRow}
        handleUpdate={handleUpdate}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleClose={handleVisibleClose}
        visible={visible}
        form={form}
      />

      {/* <UpdateBlog
        currentRow={currentRow}
        handleVisibleUpdate={handleVisibleUpdate}
        handleVisibleClose={handleVisibleClose}
        handleUpdate={handleUpdate}
        visible={visible}
      /> */}
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
