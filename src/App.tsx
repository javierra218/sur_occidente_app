import { ConfigProvider } from 'antd';
import esES from 'antd/locale/es_ES';
import './styles/global.css';

function App() {
  return (
    <ConfigProvider locale={esES}>
      <div className="App">
        <h1>Suroccidente App</h1>
      </div>
    </ConfigProvider>
  );
}

export default App;
