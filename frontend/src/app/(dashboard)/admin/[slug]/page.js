'use client'
import { api } from '@/Api/api'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'

const AdminPanel = () => {
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])

    useEffect(() => {
        api.get('/faq').then(res => {
            const data = res.data.data

            if (data.length > 0) {
                // Dynamically generate columns from the data keys
                const generatedColumns = Object.keys(data[0])
                    .filter(key => key === 'name') // Include only the 'name' column
                    .map(key => ({
                        field: key,
                        headerName: key.charAt(0).toUpperCase() + key.slice(1),
                        width: 500, // Set the width to 100%
                    }))

                // Add a column for actions
                generatedColumns.push({
                    field: 'actions',
                    headerName: 'Управление',
                    width: 150,
                    renderCell: params => (
                        <div className='flex gap-5'>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    ),
                })

                setColumns(generatedColumns)
                setRows(data)
            }
        })
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            sx={{background:'#fff',width:'100%'}}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                components={{
                    Toolbar: GridToolbar,
                }}
                pagination
                autoHeight
                disableColumnMenu
            />
        </div>
    )
}

export default AdminPanel
