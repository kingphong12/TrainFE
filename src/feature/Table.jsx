// import { Helmet } from "react-helmet";
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomerListResults from './customer/CustomerListResults'
import CustomerListToolbar from './customer/CustomerListToolbar'
import { addUser, getUser } from '../redux/actions/user'
import userApi from '../api/userApi'
import { Box, Container, Grid } from '@material-ui/core'
import AddUserForm from './AddUserForm'

const Table = () => {
  const [addUserForm, setUser] = useState(false)
  const [loadding, setLoadding] = useState(false)
  const [fillterUser, setFillterUser] = useState('')
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([])

  const customers = useSelector((state) => state.user.customers)
  const dispatch = useDispatch()

  const handleAddUser = () => {
    setUser(!addUserForm)
  }

  const handleOnSubmit = (data) => {
    dispatch(addUser(data))
  }

  const handleSubmitSearch = (searchTerm) => {
    setFillterUser(searchTerm)
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoadding(true)
        // const params = {}
        const res = await userApi.getAll()

        dispatch(getUser(res))
        setLoadding(false)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUser()
    return () => {}
  }, [])

  const searchUser = (customers) => {
    return customers.filter((cus) =>
      cus.name.toLowerCase().includes(fillterUser)
    )
  }

  const handleSelectAll = (newSelectedCustomerIds) => {
    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleSelectOne = (newSelectedCustomerIds) => {
    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const deleteUserIds = () => {
    if (selectedCustomerIds.length === 0) return
    userApi.deleteUser(selectedCustomerIds)
  }

  return (
    <>
      <Box
        sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3 }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar
            handleAddUser={handleAddUser}
            handleSubmitSearch={handleSubmitSearch}
            deleteUserIds={deleteUserIds}
          />

          <Grid container spacing={2}>
            {addUserForm ? (
              <AddUserForm handleOnSubmit={handleOnSubmit} />
            ) : null}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={addUserForm ? 8 : 12}
              visibility="visible"
            >
              <Box sx={{ pt: 3 }}>
                <CustomerListResults
                  customers={
                    fillterUser !== '' ? searchUser(customers) : customers
                  }
                  selectedIds={handleSelectOne}
                  selectAllIds={handleSelectAll}
                  selectedCustomerIds={selectedCustomerIds}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Table
