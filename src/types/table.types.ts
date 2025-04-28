export interface TableRow {
  id: string;
  editable: boolean;
  tipo: 'completa' | 'parcial' | 'numerica';
  valores?: {
    [key: string]: number;
  };
  [key: string]: string | number | boolean | { [key: string]: number } | undefined;
}

export interface TableData {
  rows: TableRow[];
  opciones: string[];
}
