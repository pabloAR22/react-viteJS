import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    className={({isActive}) =>
                        isActive ? activeStyle: undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className=' text-black/60'>
                    radabeca23@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar