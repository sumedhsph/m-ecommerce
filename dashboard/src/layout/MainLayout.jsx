import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <h1>Main Layout <Outlet/></h1>
    </div>
  )
}
