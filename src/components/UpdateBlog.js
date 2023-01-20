import React from "react";

const UpdateBlog = (props) => {
  const { currentRow, handleUpdate } = props;
  console.log(currentRow);
  return (
    <div className="form-content">
      <h2>Update Blog</h2>
      <form onSubmit={handleUpdate}>
        <input
          id="id"
          type="text"
          name="id"
          hidden
          defaultValue={currentRow.id}
        />
        <label>
          Author:
          <input
            id="author"
            type="text"
            name="author"
            defaultValue={currentRow.author}
          />
        </label>
        <label>
          Title:
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={currentRow.title}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateBlog;
