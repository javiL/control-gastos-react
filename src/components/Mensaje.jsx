import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div>
      <div className={`alerta ${tipo}`}>{children}</div>
    </div>
  )
}

export default Mensaje
