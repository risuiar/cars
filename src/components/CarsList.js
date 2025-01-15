import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios'

import requests from '../services/api/requests'
import CardCar from './CardCar';
import CardSkeleton from './CardSkeleton';
import Pagination from './Pagination';
import Advertisement from './Advertisement';
import { numberWithCommas } from '../utils/numbersWithCommas';
import Modal from './Modal';

const propTypes = {
    selectedSearchCriteria: PropTypes.object,
    page: PropTypes.number
}
const defaultProps = {
    selectedSearchCriteria: {},
    page: 1
}

const CarsList = ({selectedSearchCriteria, page}) => {
    const [cars, setCars] = useState()
    const [modal, setModal] = useState({
        isOpen: false,
        carId: null,
    })
    const fetchCars = useCallback(() => {
        window.scrollTo(0, 0);
        return axios.get(requests.cars, {
            params: {
                make: selectedSearchCriteria.make && selectedSearchCriteria.make.map(make => make.value),
                vehtyp: selectedSearchCriteria.vehtyp && selectedSearchCriteria.vehtyp.map(vehtyp => vehtyp.value),
                page,
            },
        }).then(({
            data,
        }) => {
            return data
        })
    }, [selectedSearchCriteria, page])
    const isSearching = (selectedSearchCriteria.make.length || selectedSearchCriteria.vehtyp.length)

useEffect(() => {
    !!isSearching && fetchCars()
        .then(data => {
            setCars(data)
        });
        return setCars()
}, [selectedSearchCriteria, fetchCars, isSearching]);

    if(!isSearching) {
        return <Advertisement />
    }

    const totalPageCount = cars && Math.ceil(cars.TotalMatches/ cars.ItemsPerPage)
    return <div>
        {modal.isOpen && <Modal carId={modal.carId} onClose={() => setModal({ isOpen: false, carId: null})} />}
                <div className="text-center font-bold text-2xl pt-5 md:pt-0 font-cars">{numberWithCommas(cars?.TotalMatches)} Fahrzeugangebote</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {cars ? cars.Vehicles.map(car => {
                    return <Link onClick={() => setModal({isOpen: true, carId: car.Id})} key={car.Id}>
                        <CardCar car={car} />
                    </Link>
            }) : <CardSkeleton cards={3} />}
        </div>
        {totalPageCount > 1 && <Pagination totalPageCount={totalPageCount} currentPage={cars.CurrentPage} />}
    </div>
}
CarsList.propTypes = propTypes;
CarsList.defaultProps = defaultProps;

export default CarsList
