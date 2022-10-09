import React from 'react'
import Navigation from './Navigation'


function Header() {
  return(
    <header className="border-b flex justify-between  p-3">
      <span className="font-bold">
      AppName
      </span>
      <Navigation/>
    </header>
  )
}

export default Header
