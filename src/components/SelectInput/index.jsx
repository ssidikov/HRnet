import Select from 'react-select'
import PropTypes from 'prop-types'
import './SelectInput.sass'

const SelectInput = ({ label, options, placeholder, onChange, id, errorMessage }) => (
  <div className='select-input'>
    <label htmlFor={id} className='select-input__label'>
      {label}
    </label>
    <Select
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      inputId={id}
      className='select-input__select'
    />
    {errorMessage && <p className='select-input__error'>{errorMessage}</p>}
  </div>
)

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
}

export default SelectInput
