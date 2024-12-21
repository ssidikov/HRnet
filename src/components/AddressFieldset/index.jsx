import React from 'react'
import FormInput from '../FormInput'
import SelectInput from '../SelectInput'
import PropTypes from 'prop-types'

const AddressFieldset = ({ states, stateHandler, cityHandler, streetHandler, zipHandler }) => (
  <fieldset className='address'>
    <legend>Address</legend>
    <FormInput label='Street' type='text' id='street' onChange={streetHandler} />
    <FormInput label='City' type='text' id='city' onChange={cityHandler} />
    <SelectInput
      label='State'
      options={states}
      placeholder='Select a state'
      id='state-required'
      onChange={stateHandler}
      requiredMessage='Please select a state'
    />
    <FormInput label='Zip Code' type='number' id='zip-code' onChange={zipHandler} />
  </fieldset>
)

export default AddressFieldset

AddressFieldset.propTypes = {
  states: PropTypes.array.isRequired,
  stateHandler: PropTypes.func.isRequired,
  cityHandler: PropTypes.func.isRequired,
  streetHandler: PropTypes.func.isRequired,
  zipHandler: PropTypes.func.isRequired,
}
