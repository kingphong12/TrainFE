import React from 'react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import Box from '@material-ui/core/Box'
import theme from './common/theme'
import { Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Table = React.lazy(() => import('./feature/Table'))
const Test = React.lazy(() => import('./feature/level3/Test'))
const CountryLayout = React.lazy(() => import('./feature/level3/CountryLayout'))
const loadding = <p>loadding...</p>

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid container alignItems="center" justifyContent="center">
          <Box color="text.primary" mt={5}>
            <Link to="/nhanvien" variant="contained" color="primary">
              Nhân viên
            </Link>
          </Box>
          <Box color="text.primary" mt={5} ml={5}>
            <Link to="/lv3" variant="contained" color="primary">
              Lv3
            </Link>
          </Box>
        </Grid>
        <React.Suspense fallback={loadding}>
          <Switch>
            <Route path="/nhanvien" component={Table} />
            <Route path="/lv3" component={Test} />
          </Switch>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
