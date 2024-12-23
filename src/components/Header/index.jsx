import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.sass'

function Header({ title, link, headerNavText }) {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <Link className='header__link' to={`${link}`}>
        {headerNavText}
      </Link>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  headerNavText: PropTypes.string.isRequired,
}

export default Header
