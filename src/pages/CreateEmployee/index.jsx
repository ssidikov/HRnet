import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stateSelected } from '../../redux/slices/states-slice'
import { departmentSelected } from '../../redux/slices/department-slice'
import { addEmployee } from '../../redux/slices/employees-slice'
import { statesList } from '../../data/usStates'
import { departments } from '../../data/companyDepartments'
import Header from '../../components/Header'
import FormInput from '../../components/FormInput'
import DateInput from '../../components/DateInput'
import SelectInput from '../../components/SelectInput'
import AddressFieldset from '../../components/AddressFieldset'
import SuccessModal from 'react-success-modal'
import './CreateEmployee.sass'

const CreateEmployee = () => {
  document.title = 'HRnet'

  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formAttemptedSubmit, setFormAttemptedSubmit] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState(null)
  const [startdate, setStartdate] = useState(null)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState(null)
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState(null)

  const STATES = statesList.map((s) => ({ value: s.abbreviation, label: s.name }))
  const DEPARTMENTS = departments.map((d) => ({ value: d.name, label: d.name }))

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormAttemptedSubmit(true)

    if (state && department) {
      saveEmployee()
      setIsModalVisible(true)
      resetForm()
    }
  }

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setBirthdate(null)
    setStartdate(null)
    setStreet('')
    setCity('')
    setState(null)
    setZipCode('')
    setDepartment(null)
    setFormAttemptedSubmit(false) // Сброс состояния попытки отправки
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const saveEmployee = () => {
    const employee = {
      firstName,
      lastName,
      birthdate: birthdate ? birthdate.toISOString() : null,
      startdate: startdate ? startdate.toISOString() : null,
      street,
      city,
      state,
      zipCode,
      department,
    }
    dispatch(addEmployee(employee))
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
              value={firstName} // Привязка значения
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormInput
              label='Last Name'
              type='text'
              id='last-name'
              value={lastName} // Привязка значения
              onChange={(e) => setLastName(e.target.value)}
            />
            <DateInput
              label='Date of Birth'
              id='date-of-birth'
              selected={birthdate}
              onChange={setBirthdate}
            />
            <DateInput
              label='Start Date'
              id='start-date'
              selected={startdate}
              onChange={setStartdate}
            />
            <SelectInput
              label='Department'
              options={DEPARTMENTS}
              placeholder='Select a department'
              id='department-required'
              value={department ? { label: department, value: department } : null} // Привязка значения
              onChange={(selectedOption) => {
                setDepartment(selectedOption?.value || '')
                dispatch(departmentSelected())
              }}
              requiredMessage={
                formAttemptedSubmit && !department ? 'Please select a department' : ''
              }
            />
            <AddressFieldset
              states={STATES}
              stateHandler={(selectedOption) => {
                setState(selectedOption?.value || '')
                dispatch(stateSelected())
              }}
              cityHandler={(e) => setCity(e.target.value)}
              streetHandler={(e) => setStreet(e.target.value)}
              zipHandler={(e) => setZipCode(e.target.value)}
              stateError={formAttemptedSubmit && !state ? 'Please select a state' : ''}
              cityValue={city}
              streetValue={street}
              zipValue={zipCode}
              stateValue={state}
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
