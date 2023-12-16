import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {lazy} from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
// TODO: add in SWRConfig
// TODO: Error boundary
import './App.css'

const Collector = lazy(() => import('../src/components/dataCollector'))
// ✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*
// Naps notes: it is a bit overkill to use react-router for this app
//             but I am doing this in case I want to add the fisheye data
//             and I think this will make error boundary easier
// ✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*✧･ﾟ: *✧･ﾟ:*



function App() {


  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Collector />} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
