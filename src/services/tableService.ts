import { TableData, TableRow } from '../types/table.types';
import data from '../data/tableData.json';

export const tableService = {
  getData: async (): Promise<TableData> => {
    // Simulamos una llamada a API con un delay
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data as TableData);
      }, 500);
    });
  },

  updateRow: async (row: TableRow): Promise<TableRow> => {
    // Simulamos una actualización a la API
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(row);
      }, 300);
    });
  },
};
