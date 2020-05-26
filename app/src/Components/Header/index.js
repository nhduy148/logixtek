import React from 'react'
import Navigation from '../Navigation'

export default function Header({container, router, setRouter}) {
  return (
    <header>
      <Navigation container={container} router={router} setRouter={setRouter} />
    </header>
  )
}
