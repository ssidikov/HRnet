import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes from 'prop-types'
import './DateInput.sass'

const DateInput = ({ label, id, selected, onChange }) => (
  <div className='date-input__wrapper'>
    <label htmlFor={id} className='date-input__label'>
      {label}
    </label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      className='date-input__input'
      id={id}
      required
      showYearDropdown
      dateFormat='dd/MM/yyyy'
      scrollableYearDropdown
      maxDate={new Date()}
      yearDropdownItemNumber={new Date().getFullYear() - 1924}
    />
  </div>
)

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
}

export default DateInput
