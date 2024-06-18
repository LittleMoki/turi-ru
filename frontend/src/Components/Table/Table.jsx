import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react'
import DropDownDoted from './DropDownDoted'

const AdminTable = ({ handleDelete, dataItems, loading, params }) => {
  const columns = Object.keys(dataItems[0] || {}).filter(el => el === 'name').map(key => ({
    key,
    label: key.toUpperCase(),
  }))

  columns.push({
    key: 'action',
    label: 'ACTION',
    width: '0px', // Добавляем ширину здесь
  })

  return (
    <Table
      className='text-black dark'
      aria-label='Example table with dynamic content'
    >
      <TableHeader columns={columns}>
        {column => (
          <TableColumn key={column.key} style={{ width: column.width || 'auto' }}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        isLoading={loading}
        items={dataItems}
        emptyContent={'No rows to display.'}
        loadingContent={<Spinner label='Loading...' />}
      >
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell className='cursor-pointer' key={columnKey}>
                {columnKey === 'action' ? (
                  <DropDownDoted
                    onDelete={handleDelete}
                    params={params}
                    id={item.id}
                  />
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default AdminTable
