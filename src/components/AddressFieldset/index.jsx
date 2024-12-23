import FormInput from '../FormInput'
import SelectInput from '../SelectInput'
import PropTypes from 'prop-types'
import './AddressFieldset.sass'

const AddressFieldset = ({ states, stateHandler, cityHandler, streetHandler, zipHandler }) => (
  <fieldset className='address'>
    <legend className='address__legend'>Address</legend>
    <FormInput
      label='Street'
      type='text'
      id='street'
      onChange={streetHandler}
      className='address__input'
    />
    <FormInput
      label='City'
      type='text'
      id='city'
      onChange={cityHandler}
      className='address__input'
    />
    <SelectInput
      label='State'
      options={states}
      placeholder='Select a state'
      id='state-required'
      onChange={stateHandler}
      requiredMessage='Please select a state'
      className='address__select'
    />
    <FormInput
      label='Zip Code'
      type='number'
      id='zip-code'
      onChange={zipHandler}
      className='address__input'
    />
  </fieldset>
)

AddressFieldset.propTypes = {
  states: PropTypes.array.isRequired,
  stateHandler: PropTypes.func.isRequired,
  cityHandler: PropTypes.func.isRequired,
  streetHandler: PropTypes.func.isRequired,
  zipHandler: PropTypes.func.isRequired,
}

export default AddressFieldset
