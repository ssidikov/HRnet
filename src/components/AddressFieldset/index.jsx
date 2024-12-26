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
    />
    <FormInput
      label='City'
      type='text'
      id='city'
      value={cityValue}
      onChange={cityHandler}
      className='address__input'
    />
    <SelectInput
      label='State'
      options={states}
      placeholder='Select a state'
      id='state-required'
      value={stateValue ? { label: stateValue, value: stateValue } : null}
      onChange={stateHandler}
      requiredMessage={stateError}
      className='address__select'
    />
    <FormInput
      label='Zip Code'
      type='number'
      id='zip-code'
      value={zipValue}
      onChange={zipHandler}
      className='address__input'
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
}

export default AddressFieldset
