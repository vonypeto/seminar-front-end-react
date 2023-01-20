import React, { useEffect } from "react";
import { Modal, Button, Input, Form } from "antd";

const UpdateBlog = (props) => {
  const { handleUpdate, visible, form, handleVisibleClose } = props;

  return (
    <div className="form-content">
      <Modal
        title="Basic Modal"
        open={visible}
        onCancel={handleVisibleClose}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2>Update Blog</h2>
        <Form form={form} onFinish={handleUpdate}>
          <Form.Item name="id">
            <Input hidden />
          </Form.Item>

          <Form.Item name="author" title="author">
            <Input />
          </Form.Item>

          <Form.Item name="title" title="Title:">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" value="Submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateBlog;
