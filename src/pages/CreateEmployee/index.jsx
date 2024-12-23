import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateSelected } from '../../redux/slices/states-slice'
import { departmentSelected } from '../../redux/slices/department-slice'
import { statesList } from '../../data/usStates'
import { departments } from '../../data/companyDepartments'
import Header from '../../components/Header'
import FormInput from '../../components/FormInput'
import DateInput from '../../components/DateInput'
import SelectInput from '../../components/SelectInput'
import AddressFieldset from '../../components/AddressFieldset'
import SuccessModal from 'react-success-modal'
import './styles.sass'

const CreateEmployee = () => {
  document.title = 'HRnet'

  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthdate: null,
    startdate: null,
    street: '',
    city: '',
    state: null,
    zipCode: '',
    department: '',
  })

  const isStateSelected = useSelector((state) => state.state.selected)
  const isDepartmentSelected = useSelector((state) => state.department.selected)

  const STATES = statesList.map((s) => ({ value: s.abbreviation, label: s.name }))
  const DEPARTMENTS = departments.map((d) => ({ value: d.name, label: d.name }))

  const handleFormChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (isStateSelected && isDepartmentSelected) {
      saveEmployee()
      setIsModalVisible(true)
    }
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const saveEmployee = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    employees.push(formData)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  return (
    <React.Fragment>
      <Header title='HRnet' link='/employees' headerNavText='View Current Employees' />
      <main className='create-employee'>
        <section className='create-employee__container'>
          <h2 className='create-employee__header'>Create Employee</h2>
          <form onSubmit={handleFormSubmit} className='create-employee__form'>
            <FormInput
              label='First Name'
              type='text'
              id='first-name'
              onChange={(e) => handleFormChange('firstName', e.target.value)}
            />
            <FormInput
              label='Last Name'
              type='text'
              id='last-name'
              onChange={(e) => handleFormChange('lastName', e.target.value)}
            />
            <DateInput
              label='Date of Birth'
              id='date-of-birth'
              selected={formData.birthdate}
              onChange={(date) => handleFormChange('birthdate', date)}
            />
            <DateInput
              label='Start Date'
              id='start-date'
              selected={formData.startdate}
              onChange={(date) => handleFormChange('startdate', date)}
            />
            <SelectInput
              label='Department'
              options={DEPARTMENTS}
              placeholder='Select a department'
              id='department-required'
              onChange={(option) => {
                handleFormChange('department', option.label)
                dispatch(departmentSelected())
              }}
              requiredMessage='Please select a department'
            />
            <AddressFieldset
              states={STATES}
              stateHandler={(option) => {
                handleFormChange('state', option.label)
                dispatch(stateSelected())
              }}
              cityHandler={(e) => handleFormChange('city', e.target.value)}
              streetHandler={(e) => handleFormChange('street', e.target.value)}
              zipHandler={(e) => handleFormChange('zipCode', e.target.value)}
            />
            <button type='submit' className='create-employee__submit'>
              Save
            </button>
          </form>
          <SuccessModal isOpen={isModalVisible} message='Employee Created!' onClose={closeModal} />
        </section>
      </main>
    </React.Fragment>
  )
}

export default CreateEmployee
