import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStatsGrid from '../DashboardStatsGrid'
import TransactionCharts from '../TransactionCharts'
import RecentOrders from '../RecentOrders'

const Dashboard = () => {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardStatsGrid/>
            <div className='flex flex-row gap-4 w-full'>
            <TransactionCharts/>
            </div>
            <div className='flex flex-row gap-4 w-full'>
                <RecentOrders/>
                
            </div>
        </div>

    )
}

export default Dashboard