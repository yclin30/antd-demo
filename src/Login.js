import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFinish = (values) => {
    setLoading(true);
    // 本地硬编码仅允许 admin / 123456 登录
    if (values.username === 'admin' && values.password === '123456') {
      localStorage.setItem('isLogin', 'true');
      message.success('登录成功');
      onLogin();
      navigate('/', { replace: true });
    } else {
      message.error('用户名或密码错误');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 300, margin: '100px auto' }}>
      <h1 style={{ color: 'black' }}>Quiz管理系统登录</h1>
      <Form onFinish={handleFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            登录
          </Button>
          <div>
            提示：用户名：admin，密码：123456
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;