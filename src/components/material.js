import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const [equipments, setEquipments] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "http://localhost:3001/api/equipments"
        );
        const data = await response.json();
        setEquipments({ data });
      }
      fetchData();
    }, []);

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'loc', headerName: 'Network', width: 130 },
  { field: 'mac_sn', headerName: 'Mac/Sn', width: 130 },
  { field: 'th', headerName: 'Year', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
];

const rows = equipments;

const DigitalSignage = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DigitalSignage;