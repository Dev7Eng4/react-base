import React from 'react';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  MenuItem,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  Box,
  Checkbox,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  TablePagination,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { visuallyHidden } from '@mui/utils';

import { IUser } from 'types/user.type';

import users from './users.data';

interface IFormState {
  name: string;
  gender: 'M' | 'F' | 'NA';
}

type Order = 'asc' | 'desc';

const PageAction = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '8px',
  padding: '16px',
});

const genders = [
  { label: 'Male', value: 'M' },
  { label: 'Female', value: 'F' },
  { label: 'N/A', value: 'NA' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No.', width: 50 },
  { field: 'fullName', headerName: 'Name' },
  { field: 'phoneNumber', headerName: 'Phone number' },
  { field: 'email' },
];

const descendingComparator = <T,>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};

const getComparator = <Key extends keyof any>(
  order: Order,
  orderBy: Key,
): ((a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

interface IHeadCell {
  id: keyof IUser;
  label: string;
  numeric?: boolean;
  isSort?: boolean;
}

const headCells: IHeadCell[] = [
  {
    id: 'id',
    numeric: true,
    label: 'No.',
  },
  {
    id: 'fullName',
    label: 'Name',
    isSort: true,
  },
  {
    id: 'phoneNumber',
    label: 'Phone number',
  },
  {
    id: 'email',
    label: 'Email',
    isSort: true,
  },
];

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (e: React.MouseEvent<unknown>, property: keyof IUser) => void;
  onSelectAllClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const EnhancedTableHead = ({
  numSelected,
  order,
  orderBy,
  rowCount,
  onRequestSort,
  onSelectAllClick,
}: EnhancedTableProps) => {
  const createSortHandler = (property: keyof IUser) => (e: React.MouseEvent<unknown>) => {
    onRequestSort(e, property);
  };

  return (
    <TableHead
      sx={{
        backgroundColor: '#f5f5f5',
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon={!headCell.isSort}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={headCell.isSort ? createSortHandler(headCell.id) : undefined}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = ({ numSelected }: EnhancedTableToolbarProps) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        //   pr: { xs: 1, sm: 1 },
        //   ...(numSelected > 0 && {
        //     bgcolor: theme =>
        //       alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        //   }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}
      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof IUser>('fullName');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IUser) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property || 'fullName');
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = users.map(n => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClickCheckbox = (id: string) => (event: React.MouseEvent<unknown>) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];
    console.log('selec', selectedIndex);

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleDoubleClickRow = (id: string) => () => {
    console.log('id', id);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort<IUser>(users, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  console.log('rows', visibleRows);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, borderRadius: 0, boxShadow: 'none' }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            // sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={users.length}
            />

            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={handleClick(row.id)}
                    onDoubleClick={handleDoubleClickRow(row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={handleClickCheckbox(row.id)}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100, 500]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

const ListUser = () => {
  const { control, handleSubmit } = useForm<IFormState>({
    defaultValues: {
      name: '',
      gender: 'M',
    },
  });

  const onSubmit: SubmitHandler<IFormState> = data => {
    console.log(data);
  };

  return (
    <Stack gap={'20px'}>
      <Card>
        <CardHeader title="Users Management" subheader="Manage and inquiry user of page" />

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="row" gap="8px">
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField placeholder="Name" {...field} />}
              />

              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    displayEmpty
                    input={<OutlinedInput />}
                    placeholder="Gender"
                    // MenuProps={}

                    // multiple
                    // displayEmpty
                    // value={personName}
                    // onChange={handleChange}
                    // input={<OutlinedInput />}
                    // renderValue={selected => {
                    //   if (selected.length === 0) {
                    //     return <em>Placeholder</em>;
                    //   }

                    //   return selected.join(', ');
                    // }}
                    // MenuProps={MenuProps}
                    // inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {genders.map(gender => (
                      <MenuItem value={gender.value} key={gender.value}>
                        {gender.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              <Button type="submit">Search</Button>
            </Stack>
          </form>
        </CardContent>
      </Card>

      <Card>
        <PageAction>
          <Button>Add</Button>
          <Button disabled>Edit</Button>
          <Button disabled>Delete</Button>
        </PageAction>

        <EnhancedTable />
      </Card>

      {/* <Card>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Card> */}
    </Stack>
  );
};

export default ListUser;
