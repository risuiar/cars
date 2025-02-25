import PropTypes from 'prop-types'

import { numberWithCommas } from '../utils/numbersWithCommas'

const CardCar = ({ car }) => {
  CardCar.propTypes = {
    car: PropTypes.object
  }
  return (
    <div className='w-full border border-gray-200 rounded-xl shadow dark:border-gray-700 min-h-80'>
      <div className='flex items-center justify-center h-auto bg-gray-300 rounded-xl dark:bg-gray-700'>
        <img src={car?.Images.M[0]} alt={car?.ImagesAltText} className='object-cover h-48 w-full rounded-t-xl' />
      </div>
      <div className='m-4'>
        <div className='font-bold'>
          {car?.MakeText}
        </div>
        <div className='text-xs mb-2'>
          {car?.ModelTypeText}
        </div>
        <div className=''>
          {car?.FuelTypeText}
        </div>
        <div className=''>
          {car?.Hp} PS | {car?.Km} Km
        </div>
      </div>
      <div className='p-4 flex w-full justify-between bg-accent text-white rounded-b-lg'>
        <div>CHF
          <p className='text-2xl font-bold'>{numberWithCommas(car?.Price)}.-</p>
        </div>
        <div>Leasing ab CHF
          <p className='text-2xl font-bold'>{numberWithCommas(Math.round(car?.Price / 48))}.-</p>
        </div>
        <div className='pt-5'>
          <svg version='1.1' viewBox='0 0 14 26' xmlns='http://www.w3.org/2000/svg' className='fill-white w-3'>
            <g fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
              <g transform='translate(-309 -22)' stroke='#fff' strokeWidth='1.6971'>
                <g>
                  <polyline points='310 23 322 35 310 47' />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CardCar
