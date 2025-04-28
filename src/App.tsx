import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import MainLayout from './layouts/MainLayout';
import './styles/global.css';

function App() {
  return (
    <ConfigProvider locale={esES}>
      <MainLayout>
        <div className="App">
          <h1>Suroccidente App</h1>
        </div>
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
