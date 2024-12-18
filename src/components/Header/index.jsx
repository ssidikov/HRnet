import PropTypes from 'prop-types'

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
