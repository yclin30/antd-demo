import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Button, Modal, Form, Select, message } from 'antd';
import React, { useState } from 'react';

const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);

const SearchQuestion = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setOpen(true);
  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const handleFinish = (values) => {
    // 前端演示：直接打印并提示成功
    console.log('新增题目：', values);
    message.success('题目已添加（仅前端演示）');
    setOpen(false);
    form.resetFields();
  };

  const btnStyle = {
    background: hover ? '#40a9ff' : undefined,
    borderColor: hover ? '#40a9ff' : undefined,
    color: hover ? '#fff' : undefined,
  };

  return (
    <Space orientation="horizontal" style={{ margin: '16px 0 16px 16px' }}>
      <Search
        placeholder="请输入关键词"
        allowClear
        enterButton="查询题目"
        size="large"
        onSearch={onSearch}
      />

      <Button
        type="primary"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={showModal}
        style={btnStyle}
      >
        添加题目
      </Button>

      <Modal
        title="题目"
        open={open}
        onCancel={handleCancel}
        footer={null}
        destroyOnHidden
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{ answer: 'a' }}
        >
          <Form.Item
            label="问题内容"
            name="question"
            rules={[{ required: true, message: '请输入问题内容' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="选项A" name="optiona">
            <Input />
          </Form.Item>

          <Form.Item label="选项B" name="optionb">
            <Input />
          </Form.Item>

          <Form.Item label="选项C" name="optionc">
            <Input />
          </Form.Item>

          <Form.Item label="选项D" name="optiond">
            <Input />
          </Form.Item>

          <Form.Item
            label="答案"
            name="answer"
            rules={[{ required: true, message: '请选择答案' }]}
          >
            <Select>
              <Option value="a">A</Option>
              <Option value="b">B</Option>
              <Option value="c">C</Option>
              <Option value="d">D</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ textAlign: 'right' }}>
            <Button style={{ marginRight: 8 }} onClick={handleCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
};

export default SearchQuestion;