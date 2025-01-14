import { Suspense, useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useGetSearchCriteria from "../hooks/useGetSearchCriteria"
import SearchBox from "../components/SearchBox"
import CarsList from '../components/CarsList';

const Search = () => {
    const criterias = useGetSearchCriteria()
    const [searchCriteria, setSearchCriteria] = useState()
    const [selectedSearchCriteria, setSelectedSearchCriteria] = useState({
        make: [],
        vehtyp: [],
        trans: []
    })
    const { page } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        criterias
            .then(data => {
                setSearchCriteria(data)});
    }, [criterias]);

    const handleChange = useCallback((value, type) => {
        if(page) {
            navigate('/')
        }
        setSelectedSearchCriteria(prevState => {
            return {
                ...prevState,
                [type]: value
            }
        })
    }, [navigate, page])

        return <div className="p-5 max-w-[1093px] mx-auto">
                <div className="flex flex-wrap">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='w-full md:w-1/3 md:p-5'>
                        <SearchBox
                            title="Marke"
                            options={searchCriteria ? searchCriteria.make : []}
                            onChange={(value) => handleChange(value, 'make')}
                        />
                    </div>
                    <div className='w-full md:w-1/3 md:p-5'>
                        <SearchBox
                            title="Fahrzeugart"
                            options={searchCriteria ? searchCriteria.vehtyp : []}
                            onChange={(value) => handleChange(value, 'vehtyp')}
                        />
                    </div>
                    <div className='w-full md:w-1/3 md:p-5'>
                        <SearchBox
                            title="Antriebstechnologie"
                            options={searchCriteria ? searchCriteria.trans : []}
                            onChange={(value) => handleChange(value, 'trans')}
                        />
                    </div>
                </Suspense>
        </div>
        <CarsList selectedSearchCriteria={selectedSearchCriteria} page={page} />
    </div>
}

export default Search
