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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState(null)
  const [startdate, setStartdate] = useState(null)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState(null)
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')

  const isStateSelected = useSelector((state) => state.state.selected)
  const isDepartmentSelected = useSelector((state) => state.department.selected)

  const STATES = statesList.map((s) => ({ value: s.abbreviation, label: s.name }))
  const DEPARTMENTS = departments.map((d) => ({ value: d.name, label: d.name }))

  const handleFormSubmit = (e) => {
    e.preventDefault()
    saveEmployee()
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const saveEmployee = () => {
    if (isStateSelected && isDepartmentSelected) {
      const employees = JSON.parse(localStorage.getItem('employees')) || []
      employees.push({
        firstName,
        lastName,
        birthdate,
        startdate,
        street,
        city,
        state,
        zipCode,
        department,
      })
      localStorage.setItem('employees', JSON.stringify(employees))
    }
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
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormInput
              label='Last Name'
              type='text'
              id='last-name'
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
              onChange={(e) => {
                setDepartment(e.label)
                dispatch(departmentSelected())
              }}
              requiredMessage='Please select a department'
            />
            <AddressFieldset
              states={STATES}
              stateHandler={(e) => {
                setState(e.label)
                dispatch(stateSelected())
              }}
              cityHandler={(e) => setCity(e.target.value)}
              streetHandler={(e) => setStreet(e.target.value)}
              zipHandler={(e) => setZipCode(e.target.value)}
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
