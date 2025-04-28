import React from 'react';
import { Layout, Row, Col } from 'antd';
import './TopBar.css';

const { Header } = Layout;

const TopBar: React.FC = () => {
  return (
    <Header className="topbar">
      <Row justify="space-between" align="middle" className="topbar-content">
        <Col>
          <div className="logo">Suroccidente App</div>
        </Col>
        <Col>{/* Aquí irá el menú de navegación cuando lo creemos */}</Col>
      </Row>
    </Header>
  );
};

export default TopBar;
