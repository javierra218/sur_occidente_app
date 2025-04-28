import { Checkbox, InputNumber, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { tableService } from '../../services/tableService';
import type { TableRow } from '../../types/table.types';
import './InteractiveTable.css';

const { Option } = Select;

const InteractiveTable: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TableRow[]>([]);
  const [opciones, setOpciones] = useState<string[]>([]);
  const [mostrarExtra, setMostrarExtra] = useState(false);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const response = await tableService.getData();
      setData(response.rows);
      setOpciones(response.opciones);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = async (value: string | number, record: TableRow, campo: string) => {
    const newData = data.map(item => {
      if (item.id === record.id) {
        const newItem = { ...item, [campo]: value };
        tableService.updateRow(newItem);
        return newItem;
      }
      return item;
    });
    setData(newData);
  };

  const columns = [
    {
      title: 'Columna 1',
      dataIndex: 'columna1',
      key: 'columna1',
      render: (text: string, record: TableRow) => {
        if (!record.editable) return text;
        if (record.tipo === 'completa' || record.tipo === 'parcial') {
          return (
            <Select value={text} onChange={value => handleChange(value, record, 'columna1')}>
              {opciones.map(opt => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))}
            </Select>
          );
        }
        return text;
      },
    },
    {
      title: 'Columna 2',
      dataIndex: 'columna2',
      key: 'columna2',
      render: (text: string, record: TableRow) => {
        if (!record.editable) return text;
        if (record.tipo === 'numerica') {
          return (
            <InputNumber
              value={record.valores?.columna2}
              onChange={value => {
                if (typeof value === 'number' && !isNaN(value)) {
                  handleChange(value, record, 'valores.columna2');
                }
              }}
              controls={false}
              keyboard={false}
              min={0}
              precision={0}
              type="number"
              onKeyPress={e => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          );
        }
        if (record.tipo === 'completa') {
          return (
            <Select value={text} onChange={value => handleChange(value, record, 'columna2')}>
              {opciones.map(opt => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))}
            </Select>
          );
        }
        return text;
      },
    },
    {
      title: 'Columna 3',
      dataIndex: 'columna3',
      key: 'columna3',
      render: (text: string, record: TableRow) => {
        if (!record.editable) return text;
        if (record.tipo === 'numerica') {
          return (
            <InputNumber
              value={record.valores?.columna3}
              onChange={value => {
                if (typeof value === 'number' && !isNaN(value)) {
                  handleChange(value, record, 'valores.columna3');
                }
              }}
              controls={false}
              keyboard={false}
              min={0}
              precision={0}
              type="number"
              onKeyPress={e => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          );
        }
        if (record.tipo === 'completa' || record.tipo === 'parcial') {
          return (
            <Select value={text} onChange={value => handleChange(value, record, 'columna3')}>
              {opciones.map(opt => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))}
            </Select>
          );
        }
        return text;
      },
    },
    {
      title: 'Columna 4',
      dataIndex: 'columna4',
      key: 'columna4',
      render: (text: string, record: TableRow) => {
        if (!record.editable) return text;
        if (record.tipo === 'completa') {
          return (
            <Select value={text} onChange={value => handleChange(value, record, 'columna4')}>
              {opciones.map(opt => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))}
            </Select>
          );
        }
        return text;
      },
    },
  ];

  const filteredData = data.filter(row => {
    if (!mostrarExtra && (row.tipo === 'parcial' || row.tipo === 'numerica')) {
      return false;
    }
    return true;
  });

  return (
    <div className="interactive-table">
      <div className="table-controls">
        <Checkbox checked={mostrarExtra} onChange={e => setMostrarExtra(e.target.checked)}>
          Ver filas adicionales
        </Checkbox>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={false}
        loading={loading}
        size="large"
        bordered
      />
    </div>
  );
};

export default InteractiveTable;
