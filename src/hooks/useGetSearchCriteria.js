import { useMemo } from 'react'
import axios from 'axios'
import requests from '../services/api/requests'

const useGetSearchCriteria = () => {
  const searchCriteria = useMemo(() => {
    return axios.get(requests.criteria).then(({
      data
    }) => {
      return data
    })
  }, [])
  return searchCriteria
}

export default useGetSearchCriteria
