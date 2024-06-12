import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

const DashboardStatsGrid = () => {
    return (
        <div className='flex gap-4 w-full'>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div>
                    <span className='text-sm text-gray-500 font-light px-3'>Total Sales</span>
                    <div>
                        <strong className='px-2'>$3243.50</strong>
                        <span>+245</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                    <IoPieChart  className="text-2xl text-white" />
                </div>
                <div>
                    <span className='text-sm text-gray-500 font-light px-3'>Total Sales</span>
                    <div>
                        <strong className='px-2'>$3243.50</strong>
                        <span>+245</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div>
                    <span className='text-sm text-gray-500 font-light px-3'>Total Sales</span>
                    <div>
                        <strong className='px-2'>$3243.50</strong>
                        <span>+245</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div>
                    <span className='text-sm text-gray-500 font-light px-3'>Total Sales</span>
                    <div>
                        <strong className='px-2 font-semibold text-gray-700 text-xl'>$3243.50</strong>
                        <span className='text-green-500 text-sm pl-2'>+245</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
};

export default DashboardStatsGrid;

function BoxWrapper({ children }) { // Fix the prop name here
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>;
}
