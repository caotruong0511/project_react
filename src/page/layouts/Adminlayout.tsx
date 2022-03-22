import React from 'react'
import { Outlet } from 'react-router-dom'
import Navadmin from '../../components/Navadmin'


type Props = {}

const Adminlayout = (props: Props) => {
  return (
    <div>
        <Navadmin />
        <Outlet/>
    </div>
  )
}

export default Adminlayout