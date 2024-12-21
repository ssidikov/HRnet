import React from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'

const DateInput = ({ label, id, selected, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <DatePicker
      selected={selected}
      onChange={onChange}
      className='date-input'
      id={id}
      required
      showYearDropdown
      dateFormat='dd/MM/yyyy'
      scrollableYearDropdown
    />
  </div>
)

export default DateInput

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
}
