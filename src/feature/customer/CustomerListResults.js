import { useState } from 'react';
import {
  Avatar,
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  Button
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/actions/user';
// import userApi from '../../api/userApi'
import axios from 'axios';

const CustomerListResults = ({ customers, selectedIds, selectAllIds, selectedCustomerIds, ...rest }) => {
  // const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch()
  // const [rowPage, setRowpage] = useState(customers.length)

  const handleSelectAll = (event) => {

    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }
    selectAllIds(newSelectedCustomerIds)
    // setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {

    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
      // console.log("-1", newSelectedCustomerIds)
      selectedIds(id)
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
      console.log(newSelectedCustomerIds)
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }
    selectedIds(newSelectedCustomerIds)
    // setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10))
    // setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = async id => {
    await axios.delete(`http://api.oceantech.vn/training/api/employee/${id}`)
    // const res = await userApi.getAll()
    // dispatch(getUser(res))
    dispatch(deleteUser(id))
  }
  return (
    <Paper {...rest} > { /* <PerfectScrollbar> */}
      <TableContainer>
        <Table>
          <TableHead >
            <TableRow >
              <TableCell padding="checkbox" >
                <Checkbox checked={selectedCustomerIds.length === customers.length}
                  color="primary"
                  indeterminate={selectedCustomerIds.length > 0 && selectedCustomerIds.length < customers.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>STT</TableCell>
              <TableCell>Mã nhân viên</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Action</TableCell>
            </TableRow >
          </TableHead>
          <TableBody>
            {customers && customers.slice(page * limit, page * limit + limit).map((customer, index) => (
              <TableRow hover key={index} selected={selectedCustomerIds.indexOf(customer.id) !== -1}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                    onChange={event => handleSelectOne(event, customer.id)}
                    value="true"
                  />
                </TableCell>
                <TableCell> {index + 1} </TableCell>
                <TableCell> {customer.id} </TableCell>
                <TableCell>
                  <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                      { /* {getInitials(customer.name)} */}
                    </Avatar>
                    <Typography color="textPrimary"
                      variant="body1" > {customer.name}
                    </Typography>
                  </Box >
                </TableCell>
                <TableCell> {customer.email} </TableCell>
                <TableCell> {customer.phone} </TableCell>
                <TableCell> {customer.age} </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={customers.length}
        rowsPerPage={limit}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
      />
    </Paper >);
};


export default CustomerListResults;