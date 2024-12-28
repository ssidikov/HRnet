import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/slices/employees-slice'
import { statesList } from '../../data/usStates'
import { departments } from '../../data/companyDepartments'
import Header from '../../components/Header'
import FormInput from '../../components/FormInput'
import DateInput from '../../components/DateInput'
import SelectInput from '../../components/SelectInput'
import AddressFieldset from '../../components/AddressFieldset'
import SuccessModal from 'react-success-modal'
import { v4 as uuidv4 } from 'uuid'
import './CreateEmployee.sass'

const CreateEmployee = () => {
  document.title = 'HRnet'

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthdate: null,
    startdate: null,
    street: '',
    city: '',
    state: null,
    zipCode: '',
    department: null,
  })

  const [errors, setErrors] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  const STATES = statesList.map((s) => ({ value: s.abbreviation, label: s.name }))
  const DEPARTMENTS = departments.map((d) => ({ value: d.name, label: d.name }))

  // Handle form input changes and update the form data
  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target ? e.target.value : e,
    })

    // Remove the error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors, // Keep the previous errors
      [field]: '', // Remove the error for the current field
    }))
  }

  // Handle select input changes and update the form data
  const handleSelectChange = (selectedOption, field) => {
    setFormData({
      ...formData,
      [field]: selectedOption ? selectedOption.value : null,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      firstName: !formData.firstName.trim() ? 'Please enter a first name' : '',
      lastName: !formData.lastName.trim() ? 'Please enter a last name' : '',
      birthdate: !formData.birthdate ? 'Date of birth is required' : '',
      startdate: !formData.startdate ? 'Start date is required' : '',
      street: !formData.street.trim() ? 'Please enter a street' : '',
      city: !formData.city.trim() ? 'Please enter a city' : '',
      zipCode: !formData.zipCode.trim() ? 'Please enter a zip code' : '',
      state: !formData.state ? 'Please select a state' : '',
      department: !formData.department ? 'Please select a department' : '',
    }

    setErrors(newErrors)

    if (Object.values(newErrors).every((error) => !error)) {
      saveEmployee()
      setIsModalVisible(true)
      resetForm()
    }
  }
  // Reset the form data
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      birthdate: null,
      startdate: null,
      street: '',
      city: '',
      state: null,
      zipCode: '',
      department: null,
    })
    setErrors({})
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }
  
  // Save the employee data to the store
  const saveEmployee = () => {
    const employee = {
      id: uuidv4(), // Generation of a unique ID for an employee
      ...formData,
      birthdate: formData.birthdate ? formData.birthdate.toISOString().split('T')[0] : null,
      startdate: formData.startdate ? formData.startdate.toISOString().split('T')[0] : null,
    }
    dispatch(addEmployee(employee))
  }

  return (
    <React.Fragment>
      <Header title='HRnet' link='/employees' headerNavText='View Current Employees' />
      <main className='create-employee'>
        <section className='create-employee__container'>
          <h2 className='create-employee__header'>Create Employee</h2>
          <form onSubmit={handleFormSubmit} className='create-employee__form' noValidate>
            <FormInput
              label='First Name'
              type='text'
              id='first-name'
              value={formData.firstName}
              onChange={(e) => handleChange(e, 'firstName')}
              errorMessage={errors.firstName}
            />
            <FormInput
              label='Last Name'
              type='text'
              id='last-name'
              value={formData.lastName}
              onChange={(e) => handleChange(e, 'lastName')}
              errorMessage={errors.lastName}
            />
            <DateInput
              label='Date of Birth'
              id='date-of-birth'
              selected={formData.birthdate}
              onChange={(date) => {
                handleChange(date, 'birthdate')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  birthdate: '',
                }))
              }}
              errorMessage={errors.birthdate}
            />
            <DateInput
              label='Start Date'
              id='start-date'
              selected={formData.startdate}
              onChange={(date) => {
                handleChange(date, 'startdate')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  startdate: '',
                }))
              }}
              errorMessage={errors.startdate}
            />
            <SelectInput
              label='Department'
              options={DEPARTMENTS}
              placeholder='Select a department'
              id='department-required'
              value={
                formData.department
                  ? { label: formData.department, value: formData.department }
                  : null
              }
              onChange={(selectedOption) => {
                handleSelectChange(selectedOption, 'department')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  department: '',
                }))
              }}
              errorMessage={errors.department}
            />
            <AddressFieldset
              states={STATES}
              stateHandler={(selectedOption) => {
                handleSelectChange(selectedOption, 'state')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  state: '',
                }))
              }}
              cityHandler={(e) => {
                handleChange(e, 'city')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  city: '',
                }))
              }}
              streetHandler={(e) => {
                handleChange(e, 'street')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  street: '',
                }))
              }}
              zipHandler={(e) => {
                handleChange(e, 'zipCode')
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  zipCode: '',
                }))
              }}
              stateError={errors.state}
              cityError={errors.city}
              streetError={errors.street}
              zipError={errors.zipCode}
              cityValue={formData.city}
              streetValue={formData.street}
              zipValue={formData.zipCode}
              stateValue={formData.state}
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
