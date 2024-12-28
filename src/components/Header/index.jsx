import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.sass'

function Header({ className, title, link, headerNavText }) {
  return (
    <header className={`header ${className || ''}`}>
      <h1>{title}</h1>
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
  className: PropTypes.string,
}

export default Header
