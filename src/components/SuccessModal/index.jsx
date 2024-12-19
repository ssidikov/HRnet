import React from 'react'
import PropTypes from 'prop-types'
import './SuccessModal.sass'

const SuccessModal = ({ message, isOpen, onClose, className }) => {
  if (!isOpen) return null

  return (
    <React.Fragment>
      <div className={`modal-overlay ${className || ''}`}>
        <div className='modal-content'>
          <button className='modal-close' onClick={onClose}>
            ×
          </button>
          <p>{message}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SuccessModal

SuccessModal.propTypes = {
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
}
