import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Button, Modal } from 'antd';
import React, { useState } from 'react';
import AddNew from './AddNew';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchUser = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => setOpen(true);
  const handleOk = () => setOpen(false);
  const handleCancel = () => setOpen(false);

  return (
    <Space orientation="horizontal" style={{ margin: '16px 0 16px 16px' }}>
      <Search
        placeholder="请输入用户名"
        allowClear
        enterButton="查询用户"
        size="large"
        onSearch={onSearch}
      />
      <Button type="primary" onClick={showModal}>
        添加用户
      </Button>

      <Modal
        title="添加用户"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnHidden
      >
        <AddNew />
      </Modal>
    </Space>
  );
};

export default SearchUser;