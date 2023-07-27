import React from 'react'

const button = (props) => {
  return (
    <button type={props.type} className='button' onClick={props.onClick} disabled={props.disabled} >{props.text}</button>
  )
}

export default button