
import PropTypes from 'prop-types';

import Details from '../pages/Details';

const propTypes = {
    carId: PropTypes.number,
    onClose: PropTypes.func.isRequired
};

const Modal = ({
    carId,
    onClose
}) => {
    return(
<div className="relative z-10" ariaLabelledby="modal-title" role="dialog" ariaModal="true">
  <div className="fixed inset-0 bg-gray-500/85 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-gray-200 text-left shadow-xl transition-all sm:my-8 w-full md:max-w-6xl sm:max-w-2xl min-h-96">
        <div className="bg-gray-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="flex justify-end cursor-pointer">
                <button onClick={onClose} className="w-6 h-6 cursor-pointer" aria-label="Close">
                    <img src="/images/close.svg" alt="close" className="w-6 h-6" />
                </button>
            </div>
            <Details carId={carId} />
        </div>
      </div>
    </div>
  </div>
</div>)
}

Modal.propTypes = propTypes

export default Modal
