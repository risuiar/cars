import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

import { numberWithCommas } from '../utils/numbersWithCommas';
import requests from '../services/api/requests'

const Details = ({ carId }) => {
    const [car, setCar] = useState()
    const [carPic, setCarPic] = useState()

    const fetchCar = useCallback(() => {
        return axios.get(requests.car(carId)).then(({
            data,
        }) => {
            return data
        })
    }, [carId])

useEffect(() => {
    fetchCar()
        .then(data => {
            setCar(data)
            setCarPic(data.Images.L[0])
        });
       return setCar()
}, [fetchCar]);


    return <div className='pt-5 md:flex'>
        <div className='w-3/4'>
            <div className='flex w-full'>
                <div className='hidden md:block w-36'>
                    {car?.Images.S.slice(1, 4).map((image, index) => {
                        return <button onClick={() => setCarPic(car.Images.L[index + 1])} key={index}>
                            <img src={image} alt={car?.ImagesAltText} className="object-cover w-full rounded-xl w-44 mb-5" />
                            </button>
                    })}
                </div>
                <div className='ml-6'><img src={carPic} alt={car?.ImagesAltText} className="object-cover w-full rounded-xl" /></div>
            </div>
            <div>
                <p className='mt-10 font-bold'>{car?.MakeText}</p>
                <p>{car?.ModelTypeText}</p>
            </div>
            <div className='text-right'>
                <p className="text-xs">Kaufpreis</p>
                <p><span className="text-xs font-bold">CHF</span> <span className="text-xl font-bold">{numberWithCommas(car?.Price)}.-</span></p>
                <p className='text-xs font-bold'>Neupreis CHF {numberWithCommas(car?.PriceNew)}.-</p>
            </div>
        </div>
        <div className='w-full md:w-1/4 pl-0 pt-0 md:pl-5 mt-5 md:mt-0'>
        <div className="bg-white rounded-xl h-18 p-2 text-xs mb-5">Mehr als 20 Personen denken gerade darüber nach, sich dieses Fahrzeug anzuschaffen.</div>
        <div className="bg-white rounded-xl h-18 p-2 text-xs">
            <p className='font-bold text-2xl'>Einfach und schnell: Ihre Online-Offert-Anfrage</p>
            <p className="text-xs">Ob bequem zu Hause oder von unterwegs: Mit wenigen Klicks können Sie uns eine unverbindliche Offert-Anfrage schicken – und das jederzeit. Wann es für Sie eben am besten passt.</p>
        </div>

        <div className="p-4 flex w-full justify-between bg-accent text-white rounded-b-lg">
                <div>CHF
                    <p className="text-xl font-bold">{numberWithCommas(car?.Price)}.-</p>
                </div>
                <div>Leasing ab CHF
                    <p className="text-xl font-bold">{numberWithCommas(Math.round(car?.Price/48))}.-</p>
                </div>
                <div className="pt-5">
                    <svg version="1.1" viewBox="0 0 14 26" xmlns="http://www.w3.org/2000/svg" className="fill-white w-3">
                        <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <g transform="translate(-309 -22)" stroke="#fff" strokeWidth="1.6971">
                                <g>
                                    <polyline points="310 23 322 35 310 47"></polyline>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}

Details.propTypes = {
    carId: PropTypes.number.isRequired,
};

export default Details;
