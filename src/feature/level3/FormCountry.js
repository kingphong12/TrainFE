import React from 'react'

import { Card, FormControl, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

const FormCountry = () => {
  return (
    <Card>
      <form>
        <FormControl>
          <Autocomplete
            id="combo-box-demo"
            // options={ }
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
        </FormControl>
      </form>
    </Card>
  )
}

export default FormCountry
