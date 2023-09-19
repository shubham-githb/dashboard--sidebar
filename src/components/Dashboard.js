import React from 'react'
import Navbar from './Navbar'
import Balance from './Balance'
import Analytic from './Analytics'

export const Dashboard = () => {
  return (
    <div>
        {/* <h1>This is Dashoard Template</h1> */}
        <Navbar/>
        <div>
        {/* <Balance/> */}
        </div>
        

        <Analytic/>
    </div>
  )
}
