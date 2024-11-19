import React, { memo } from 'react'

const Navbar = ({count}) => {
  console.log("Navbar rendering")
  return (
    <div>Navbar {count}</div>
  )
}

export default memo(Navbar)