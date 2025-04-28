export interface TableRow {
  id: string;
  columna1: string;
  columna2: string;
  columna3: string;
  columna4: string;
  editable: boolean;
  tipo: 'completa' | 'parcial' | 'numerica';
  valores?: {
    [key: string]: number;
  };
}

export interface TableData {
  rows: TableRow[];
}
