import PropTypes from 'prop-types'
import './FormInput.sass'

const FormInput = ({ label, type, id, value, onChange }) => (
  <div className='form-input'>
    <label htmlFor={id} className='form-input__label'>
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className='form-input__input'
      required
    />
  </div>
)

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default FormInput
