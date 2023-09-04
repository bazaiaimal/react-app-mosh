import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
            <nav className="navbar bg-info" >
                <div className="container-fluid">
                    <a className="navbar-brand">Blogs Menu</a>
                    <div>
                        <Link to='/home' className='btn btn-primary text-white mx-1' >Home</Link>
                        <Link to='/contact' className='btn btn-primary text-white mx-1' >Contact</Link>
                        <Link to='/devlinks' className='btn btn-primary text-white mx-1' >Devlinks Design</Link>
                        <Link to='/api' className='btn btn-primary text-white mx-1'>Api Call</Link>
                        <Link to='/profileImg' className='btn btn-primary text-white mx-1'>Profile Img</Link>
                        <Link to='/registrationForm' className='btn btn-primary text-white mx-1'>Registraton Form</Link>
                        <Link to="/formMosh" className='btn btn-primary text-white mx-1'>Form with Mosh</Link>
                        <Link to="/expenseList" className='btn btn-primary text-white mx-1'>Expense List Project</Link>
                        <Link to="/axiosApi" className='btn btn-primary text-white mx-1'>Fetching Api with Axios</Link>
                        <Link to="/game" className='btn btn-primary text-white mx-1'>Game Project</Link>
                    </div>
                </div>
            </nav>
    )
}
