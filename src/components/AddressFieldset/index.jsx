import FormInput from '../FormInput'
import SelectInput from '../SelectInput'
import PropTypes from 'prop-types'
import './AddressFieldset.sass'

const AddressFieldset = ({
  states,
  stateHandler,
  cityHandler,
  streetHandler,
  zipHandler,
  stateError,
  cityError,
  streetError,
  zipError,
  cityValue,
  streetValue,
  zipValue,
  stateValue,
}) => (
  <fieldset className='address'>
    <legend className='address__legend'>Address</legend>
    <FormInput
      label='Street'
      type='text'
      id='street'
      value={streetValue}
      onChange={streetHandler}
      className='address__input'
      errorMessage={streetError} // Error message for the street
    />
    <FormInput
      label='City'
      type='text'
      id='city'
      value={cityValue}
      onChange={cityHandler}
      className='address__input'
      errorMessage={cityError} // Error message for the city
    />
    <SelectInput
      label='State'
      options={states}
      placeholder='Select a state'
      id='state-required'
      value={stateValue ? { label: stateValue, value: stateValue } : null}
      onChange={stateHandler}
      errorMessage={stateError} // Error message for the state
      className='address__select'
    />
    <FormInput
      label='Zip Code'
      type='number'
      id='zip-code'
      value={zipValue}
      onChange={zipHandler}
      className='address__input'
      errorMessage={zipError} // Error message for the zip code
    />
  </fieldset>
)

AddressFieldset.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  stateHandler: PropTypes.func.isRequired,
  cityHandler: PropTypes.func.isRequired,
  streetHandler: PropTypes.func.isRequired,
  zipHandler: PropTypes.func.isRequired,
  stateError: PropTypes.string,
  cityValue: PropTypes.string.isRequired,
  streetValue: PropTypes.string.isRequired,
  zipValue: PropTypes.string.isRequired,
  stateValue: PropTypes.string,
  cityError: PropTypes.string,
  streetError: PropTypes.string,
  zipError: PropTypes.string,
}

export default AddressFieldset
