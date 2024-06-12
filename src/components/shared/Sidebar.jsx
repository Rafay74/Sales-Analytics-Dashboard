import React from 'react';
import { FcBullish } from 'react-icons/fc';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigations';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi';
const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


const Sidebar = () => {
    return (
        <div className='flex flex-col w-64 p-4 bg-neutral-900 text-white h-full'>
            <div className='flex items-center gap-2 px-1 py-1'>
                <FcBullish className='mr-2' />
                <span className='text-neutral-100 text-lg'>OpenShop</span>
            </div>
            <div className='flex-1 py-10 '>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}></SidebarLink>
                ))}
            </div>
            <div className='flex flex-col gap-2'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}></SidebarLink>
                ))}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
            </div>

        </div>
    );
}


function SidebarLink({ item }) {
    const { pathname } = useLocation()
    return (
        <Link to={item.path} className={classNames(pathname == item.pathname ? 'text-white' : ' ', linkClass)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar;
