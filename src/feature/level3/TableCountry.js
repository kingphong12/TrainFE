import { Card, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'

const TableCountry = ({ selectedCountryIds, countryList, handleSelectAllIds, handleSelectId, rest }) => {

  // console.log(countryList) //Đây này bác


  const handleSelectAll = (e) => {
    let newSelectedCountryIds

    if (e.target.checked) {
      newSelectedCountryIds = countryList.map(country => country.id)
    } else {
      newSelectedCountryIds = []
    }
    handleSelectAllIds(newSelectedCountryIds)
  }

  const handleSelectOne = (event, id) => {

    const selectedIndex = selectedCountryIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCountryIds, id);
      // console.log("-1", newSelectedCustomerIds)
      handleSelectId(id)
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCountryIds.slice(1));
    } else if (selectedIndex === selectedCountryIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCountryIds.slice(0, -1));
      console.log(newSelectedCustomerIds)
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCountryIds.slice(0, selectedIndex),
        selectedCountryIds.slice(selectedIndex + 1)
      );
    }
    handleSelectId(newSelectedCustomerIds)
    // setSelectedCustomerIds(newSelectedCustomerIds);
  };

  return (
    <Paper {...rest}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox checked={selectedCountryIds.length === countryList.length}
                  color="primary"
                  indeterminate={selectedCountryIds.length > 0 && selectedCountryIds.length < countryList.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>STT</TableCell>
              <TableCell>Tỉnh</TableCell>
              {/* <TableCell>Huyện</TableCell>
              <TableCell>Xã</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {countryList && countryList.map((country, index) => (
              <TableRow hover key={index} selected={selectedCountryIds.indexOf(country.id) !== -1}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCountryIds.indexOf(country.id) !== -1}
                    onChange={event => handleSelectOne(event, country.id)}
                    value="true"
                  />
                </TableCell>
                <TableCell>{index + 1}</TableCell>
                {/* <TableCell>
                  {country.id}
                </TableCell> */}
                <TableCell>
                  {country.name}
                </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper >
  )
}

export default TableCountry
