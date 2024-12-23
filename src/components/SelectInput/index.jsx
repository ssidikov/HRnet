import Select from 'react-select'
import PropTypes from 'prop-types'
import './SelectInput.sass'

const SelectInput = ({ label, options, placeholder, onChange, id, requiredMessage }) => (
  <div className='select-input'>
    <label htmlFor={id} className='select-input__label'>
      {label}
    </label>
    <Select
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      className='select-input__select'
      classNamePrefix='select'
    />
    <p className='select-input__required' id={id}>
      {requiredMessage}
    </p>
  </div>
)

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string.isRequired,
}

export default SelectInput
