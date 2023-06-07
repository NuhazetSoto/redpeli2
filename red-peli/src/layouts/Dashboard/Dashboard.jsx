import React from 'react'
import ContentMenu from '../../Components/ContentMenu/ContentMenu'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
     <ContentMenu />
     <Outlet />
    </>
  )
}

export default Dashboard