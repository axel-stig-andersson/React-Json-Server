import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAddForm }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAddForm ? 'red' : 'green' }
        text={showAddForm ? 'Close'
        : 'Add'}
        onClick={onAdd}/>
    </header>
  ) 
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
} 

export default Header