import React from 'react';
import { Layout } from 'antd';
import './MainLayout.css';

const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="main-header">{/* Aquí irá el TopBar cuando lo creemos */}</Header>
      <Content className="main-content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
