import React, { useEffect, useLayoutEffect, useState } from 'react'
import TableCountry from './TableCountry'
import { useSelector, useDispatch } from 'react-redux'
import countryApi from '../../api/countyApi'
import { getCountry } from '../../redux/actions/country'
import { Box, Button, CardActions, Container } from '@material-ui/core'
import ModalForm from './ModalForm'

const Test = () => {
  const [loadding, setLoadding] = useState(false)
  const [selectedCountryIds, setSelectedCountryIds] = useState([])
  const [open, setOpen] = useState(false)

  const countryList = useSelector((state) => state.country.countryList)
  const dispatch = useDispatch()

  const handleSelectIds = (newSelectedCustomerIds) => {
    setSelectedCountryIds(newSelectedCustomerIds)
  }

  const handleSelectId = (newSelectedCustomerIds) => {
    setSelectedCountryIds(newSelectedCustomerIds)
  }

  const handleSeclect = () => {
    setOpen(true)
  }

  const handleCloseFrom = () => {
    setOpen(false)
  }
  useEffect(() => {
    const fetCountryData = async () => {
      try {
        // const params = {}
        setLoadding(true)
        const res = await countryApi.getAll()
        dispatch(getCountry(res))
        setLoadding(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetCountryData()
    return () => { }
  }, [])



  return (
    <Box
      sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3 }}
    >
      <Container maxWidth={false}>
        <Box component="div" display="flex" justifyContent="flex-end" alignContent="center">
          {/* <Card> */}
          <CardActions>
            <Button size="small" variant="contained" color="primary" onClick={handleSeclect}>Seclect District</Button>
          </CardActions>
          {/* </Card> */}
        </Box>
        <ModalForm open={open} handleCloseFrom={handleCloseFrom} countryList={countryList} />
        <Box sx={{ pt: 3 }}>
          <TableCountry
            countryList={countryList}
            selectedCountryIds={selectedCountryIds}
            handleSelectAllIds={handleSelectIds}
            handleSelectId={handleSelectId}
          />
        </Box>
      </Container>
    </Box >
  )
}

export default Test