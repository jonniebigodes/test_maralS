import React from 'react'
/**
 * dummy component as i'm not aware of the proper modal code/library used
 */
const Modal = props => {
  const { show, children } = props
  return show ? <div>{children}</div> : null
}

export default Modal
