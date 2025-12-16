import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SearchUser from './component/SearchUser';
import UserTable from './component/UserTable';
import SearchQuestion from './component/SearchQuestion';
import QuestionTable from './component/QuestionTable';

const { Header, Footer, Sider, Content } = Layout;

const Admin = () => {
  const [selected, setSelected] = useState('1');

  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#ffffff' }}>Quiz管理系统</h1>
      </Header>
      <Layout>
        <Sider trigger={null}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selected]}
            onClick={(e) => setSelected(e.key)}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '用户管理',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: '题目管理',
              },
            ]}
          />
        </Sider>
        <Content style={{ padding: 16 }}>
          {selected === '1' ? (
            <>
              <SearchUser />
              <UserTable />
            </>
          ) : (
            <>
              <SearchQuestion />
              <QuestionTable />
            </>
          )}
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Quiz管理系统 ©2025 Created by tfzhang
      </Footer>
    </Layout>
  );
};

export default Admin;
