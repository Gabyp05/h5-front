import Papa from "papaparse";
import { saveAs } from "file-saver";

export const useExportToCSV = (csvData) => {
    const delimiter = (typeof Intl !== "undefined" && new Intl.NumberFormat().format(1000).includes(',')) ? ',' : ';';
    
    const csv = Papa.unparse(csvData, {
        delimiter: delimiter,
    });
        
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'leads.csv');
};
    