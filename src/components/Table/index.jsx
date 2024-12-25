import { DataGrid, GridToolbarQuickFilter, GridLinkOperator } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * Quick search field
 * @returns {JSX.Element}
 */
const QuickSearchToolbar = () => {
  return (
    <Box sx={{ p: 1 }}>
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  )
}

/**
 * Data table
 * @param {Object} props
 * @param {Array} props.employees - List of employees
 * @param {Array} props.columns - Stage columns
 * @returns {JSX.Element}
 */
const Table = ({ employees, columns }) => {
  return (
    <div className='employee-list__table-main'>
      <DataGrid
        rows={employees}
        columns={columns}
        disableColumnMenu
        rowsPerPageOptions={[10, 25, 100]}
        components={{ Toolbar: QuickSearchToolbar }}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLinkOperator.Or,
            },
          },
        }}
      />
    </div>
  )
}

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      startDate: PropTypes.string,
      dateOfBirth: PropTypes.string,
      state: PropTypes.string,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
}

export default Table
