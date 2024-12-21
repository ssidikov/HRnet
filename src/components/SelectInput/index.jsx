import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const SelectInput = ({ label, options, placeholder, onChange, id, requiredMessage }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <Select options={options} placeholder={placeholder} onChange={onChange} className='select' />
    <p className='select-required' id={id}>
      {requiredMessage}
    </p>
  </div>
)

export default SelectInput

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string.isRequired,
}
