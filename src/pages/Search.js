import { Suspense, useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import useGetSearchCriteria from '../hooks/useGetSearchCriteria'
import SearchBox from '../components/SearchBox'
import CarsList from '../components/CarsList'

const Search = () => {
  const criterias = useGetSearchCriteria()
  const [searchCriteria, setSearchCriteria] = useState()
  const [selectedSearchCriteria, setSelectedSearchCriteria] = useState({
    make: [],
    vehtyp: [],
    trans: []
  })
  const { page } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    criterias
      .then(data => {
        setSearchCriteria(data)
      })
  }, [criterias])

  const handleChange = useCallback((value, type) => {
    if (page) {
      navigate('/')
    }
    setSelectedSearchCriteria(prevState => {
      return {
        ...prevState,
        [type]: value
      }
    })
  }, [navigate, page])

  return (
    <div className='p-5 max-w-[1093px] mx-auto'>
      <div className='text-center max-w-lg m-auto'>
        <h1 className='font-bold text-3xl pb-3'>Unsere Fahrzeugauswahl</h1>
        <p className='text-sm'>Suchen Sie gezielt nach dem Fahrzeug, das am besten zu Ihren Bedürfnissen passt! Wahlen Sie
          einfach Ihre bevorzugte Fahrzeugart und die gewünschte Antriebstechnologie - von klassischen
          Verbrennern bis hin zu Elektro- und Hybridmodellen. So finden Sie schnell und unkompliziert lhr
          Wunschfahrzeug.
        </p>
      </div>
      <div className='flex flex-wrap mt-5'>
        <Suspense fallback={<div>Loading...</div>}>
          <div className='w-full md:w-1/3 md:p-5'>
            <SearchBox
              title='Marke'
              options={searchCriteria ? searchCriteria.make : []}
              onChange={(value) => handleChange(value, 'make')}
            />
          </div>
          <div className='w-full md:w-1/3 md:p-5'>
            <SearchBox
              title='Fahrzeugart'
              options={searchCriteria ? searchCriteria.vehtyp : []}
              onChange={(value) => handleChange(value, 'vehtyp')}
            />
          </div>
          <div className='w-full md:w-1/3 md:p-5'>
            <SearchBox
              title='Antriebstechnologie'
              options={searchCriteria ? searchCriteria.trans : []}
              onChange={(value) => console.log(value, 'trans')}
            />
          </div>
        </Suspense>
      </div>
      <CarsList selectedSearchCriteria={selectedSearchCriteria} page={page} />
    </div>
  )
}

export default Search
