import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import NavbarLinks from './NavbarLinks'
import Button from '../Button/Button'
const Navbar = () => {
    return (
        <nav className="bg-[#fff]">
            <div className="flex items-center font-medium justify-around">
                <div>
                    <img src={Logo} className='md:cursor-pointer h-9'/>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
                    <li>
                        <Link to="/" className='py-7 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <NavbarLinks />
                </ul>
                <div className='md:block hidden'>
                    <Button />
                </div>
            </div>
            {/* <div className='flex items-center h-20'>
                <button className='bg-[#e52424f4]'>Delele</button>
                <h1 className='bg-[#27e524f4]'>Edit</h1>
            </div> */}
        </nav>
    )
}

export default Navbar