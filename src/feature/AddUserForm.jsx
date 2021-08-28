import React, { useState } from 'react'
import { Box, Button, Card, Grid } from '@material-ui/core'

const AddUserForm = (props) => {
  const { handleOnSubmit } = props
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    phone: '',
    age: '',
  })

  const handleOnchange = (e) => {
    const target = e.target
    const name = target.name
    const value = target.value

    setUserForm({
      ...userForm,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      ...userForm,
    }
    handleOnSubmit(data)
  }

  return (
    <Grid item xs={12} sm={12} md={12} lg={4}>
      <Box sx={{ pt: 3 }}>
        <Card>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={8}>
              <Grid item md={6} lg={6}>
                <Box display="flex" justifyContent="center">
                  <input
                    type="text"
                    name="username"
                    value={userForm.username}
                    onChange={handleOnchange}
                  />
                </Box>
              </Grid>
              <Grid item md={6} lg={6}>
                <Box display="flex" justifyContent="center">
                  <input
                    type="email"
                    name="email"
                    value={userForm.email}
                    onChange={handleOnchange}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item md={6}>
                <Box display="flex" justifyContent="center">
                  <input
                    type="number"
                    name="phone"
                    value={userForm.phone}
                    onChange={handleOnchange}
                  />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box display="flex" justifyContent="center">
                  <input
                    type="number"
                    name="age"
                    value={userForm.age}
                    onChange={handleOnchange}
                  />
                </Box>
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" color="primary">
              add
            </Button>
          </form>
        </Card>
      </Box>
    </Grid>
  )
}

export default AddUserForm
