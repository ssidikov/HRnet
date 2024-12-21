import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ title, link, headerNavText }) {
  return (
    <header className='title'>
      <h1>{title}</h1>
      <Link className='link' to={`/${link}`}>
        {headerNavText}
      </Link>
    </header>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  headerNavText: PropTypes.string.isRequired,
}
