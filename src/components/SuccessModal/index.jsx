import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './SuccessModal.sass'

const SuccessModal = ({ message, isOpen, onClose, className }) => {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => setShowAnimation(true), 10)
      return () => clearTimeout(timeout)
    } else {
      setShowAnimation(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <React.Fragment>
      <div className={`modal__overlay ${className || ''}`}>
        <div className={`modal__content ${showAnimation ? 'modal__content--open' : ''}`}>
          <button className='modal__close' onClick={onClose}>
            ×
          </button>
          <p className='modal__message'>{message}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

SuccessModal.propTypes = {
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default SuccessModal
