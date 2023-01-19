import React from "react";

const CreateBlog = (props) => {
  const { blog, setBlog, handleSubmit } = props;

  return (
    <div className="form-content">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Author:
          <input id="author" type="text" name="author" />
        </label>
        <label>
          Title:
          <input id="title" type="text" name="title" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateBlog;
