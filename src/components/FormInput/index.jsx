import PropTypes from 'prop-types'
import './FormInput.sass'

const FormInput = ({ label, type, id, value, onChange, errorMessage }) => (
  <div className='form-input'>
    <label htmlFor={id} className='form-input__label'>
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`form-input__input ${errorMessage ? 'form-input__input--error' : ''}`}
    />
    {errorMessage && <p className='form-input__error'>{errorMessage}</p>}
  </div>
)

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default FormInput
