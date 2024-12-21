import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ label, type, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} value={value} onChange={onChange} required />
  </div>
)

export default FormInput

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
