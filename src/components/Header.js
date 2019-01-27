import React, { memo } from 'react'
import PropTypes from 'prop-types'
import '../styles/header.css'

function Header({ title }) {
  return <div className="header">{title}</div>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default memo(Header)
