import React from 'react'

export default function Navigation({container, router, setRouter}) {
  
  return (
    <nav className="nav">
      <ul className="nav-list">
        {
          container.map( item => item.showInNav && <li key={item.key} className={`nav-item${router.key === item.key ? " active" : ""}`}><span onClick={() => setRouter({key: item.key})}>{item.name}</span></li>)
        }
      </ul>
    </nav>
  )
}
