import { useMemo } from 'react'
import axios from 'axios'
import requests from '../services/api/requests'

const useGetSearchCriteria = () => {

const searchCriteria = useMemo(() => {
    console.log(requests.criteria)
    return axios.get(requests.criteria).then(({
        data,
    }) => {
        return data
    })
}, [])
console.log(searchCriteria)
    return searchCriteria
}

export default useGetSearchCriteria
