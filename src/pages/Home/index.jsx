import Header from '../../components/Header'
// import SuccessModal from '../../components/SuccessModal'
import SuccessModal from 'react-success-modal'
import { useState } from 'react'
import './Home.sass'
import { Link } from 'react-router-dom'
import states from '../../data/statesList'

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Simulate form submission
    console.log('Form submitted successfully')
    setIsModalVisible(true) // Show the modal
  }

  const closeModal = () => {
    setIsModalVisible(false) // Hide the modal
  }

  return (
    <div>
      <Header title='HRnet' />
      <Link className='link' to='/employees'>
        View Current Employees
      </Link>
      <div>
        <h1>New Employee Form</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <select name='state' id='state' required>
              {states.map((state) => {
                return <option key={state.abbreviation}>{state.name}</option>
              })}
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>

        <SuccessModal isOpen={isModalVisible} message='Employee Created!' onClose={closeModal} />
      </div>
    </div>
  )
}

export default Home
