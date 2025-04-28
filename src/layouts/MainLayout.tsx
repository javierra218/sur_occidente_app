import React from 'react';
import { Layout } from 'antd';
import TopBar from '../components/TopBar/TopBar';
import './MainLayout.css';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopBar />
      <Content className="main-content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
