import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countriesRequest } from './redux/slice'
import { RootState } from './redux'
import { Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Layout from './layout'
import CountryDetail from './pages/countryDetail'

function App() {
  const dispatch = useDispatch()
  const countries = useSelector((state: RootState) => state.countries)
  useEffect(() => {

    dispatch(countriesRequest())
  }, [])
  console.log(countries);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:id' element={<CountryDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
