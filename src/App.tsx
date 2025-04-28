import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import MainLayout from './layouts/MainLayout';
import InteractiveTable from './components/InteractiveTable/InteractiveTable';
import './styles/global.css';

function App() {
  return (
    <ConfigProvider locale={esES}>
      <MainLayout>
        <h1>Tabla Interactiva</h1>
        <InteractiveTable />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
