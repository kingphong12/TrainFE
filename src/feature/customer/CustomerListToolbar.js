import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
// import { Search as SearchIcon } from 'react-feather';

const CustomerListToolbar = ({ handleAddUser, handleSubmitSearch, deleteUserIds }) => {

  const [fillter, setFillter] = useState({
    searchTerm: ""
  })
  const handleOnAddUser = () => {
    handleAddUser()
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.value.toLowerCase().trim()

    setFillter({
      searchTerm: value
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    handleSubmitSearch(fillter.searchTerm)
    // console.log(fillter.searchTerm)
  }

  const deleteUser = () => {
    deleteUserIds()
  }
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button variant="contained" color="secondary" onClick={deleteUser}>
          Delete
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOnAddUser}
        >
          Add customer
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <form onSubmit={handleSearch}>
                <TextField
                  fullWidth
                  defaultValue={fillter.searchTerm}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"

                          color="action"
                        >
                          {/* <SearchIcon /> */}
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search customer"
                  variant="outlined"
                  onChange={handleChange}
                />
                <Button variant="contained" type="submit">Search</Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )

};

export default CustomerListToolbar;
