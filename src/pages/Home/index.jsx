import Header from '../../components/Header'
import SuccessModal from '../../components/SuccessModal'
import { useState } from 'react'

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
          </div>
          <button type='submit'>Submit</button>
        </form>

        <SuccessModal
          isVisible={isModalVisible}
          title='Employee Added Successfully'
          message='The new employee has been added to the system.'
          onClose={closeModal}
          isOpen={isModalVisible}
        />
      </div>
    </div>
  )
}

export default Home
