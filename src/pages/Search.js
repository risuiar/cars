import { Suspense, useState, useEffect } from 'react';
import useGetSearchCriteria from "../hooks/useGetSearchCriteria"
import SearchBox from "../components/SearchBox"
import CarsList from '../components/CarsList';

const Search = () => {
    const criterias = useGetSearchCriteria()
    const [searchCriteria, setSearchCriteria] = useState()
    const [selectedSearchCriteria, setSelectedSearchCriteria] = useState()

    useEffect(() => {
        criterias
            .then(data => {
                console.log(data)
                setSearchCriteria(data)});
    }, [criterias]);

        return <div className="p-5 max-w-[1093px] mx-auto">
                <div className="flex flex-wrap">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='w-full md:w-1/3 md:p-5'>
                        <SearchBox
                            title="Marke"
                            options={searchCriteria ? searchCriteria.make : []}
                            onChange={(selected) => console.log(selected)}
                        />
                    </div>
                    <div className='w-full md:w-1/3 md:p-5'>
                        <SearchBox
                            title="Fahrzeugart"
                            options={searchCriteria ? searchCriteria.vehtyp : []}
                            onChange={(selected) => console.log(selected)}
                        />
                    </div>
                    <div className='w-full md:w-1/3 md:p-5'>
                        <SearchBox
                            title="Antriebstechnlogie"
                            options={searchCriteria ? searchCriteria.trans : []}
                            onChange={(selected) => console.log(selected)}
                        />
                    </div>
                </Suspense>
        </div>
        <CarsList />
    </div>
}

export default Search
