import { Target } from 'lucide-react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthManager';
import Signin from '../Signin';
import Emailenter from '../pages/Emailenter';

function Navbar(){
    const {token ,setToken , setUser} = useContext(AuthContext);
    const [active , setActive] = useState(false);
    const [activepass , setActivepass] = useState(false);


    let handleSignout = () => {
        setToken('');
        setUser({});
        // setActive(!active);
    }


    return (
        
        <nav className="z-20 max-w-6xl h-16 px-4 flex items-center justify-between sticky bg-white/80 mx-auto">
            <NavLink to='/'>
            <div className='flex gap-2'>
               <div className=''>
                  <Target className='w-6 h-6 bg-blue-600 text-white p-1 rounded-sm'/>
               </div>
               <div className='font-semibold'>
                <h2>ATS Analyzer</h2>
               </div>
            </div>
            </NavLink>
            <div>
                <ul className=' gap-10 font-semibold text-gray-600 hidden md:block md:flex'>
                    <NavLink className={({isActive})=> isActive ? 'text-black' : ' hover:text-black'} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-black' : ' hover:text-black'} to='/analyze'>Analyzer</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-black' : ' hover:text-black'} to='/profile'>Profile</NavLink>
                </ul>
            </div>
            {token ?
            (<div className='w-20 p-0.5 h-8 bg-black text-white text-center rounded-sm'>
               <NavLink to='#' onClick={() => handleSignout()}>
                Sign out
               </NavLink>
            </div>) :
            (<div className='w-20 p-0.5 h-8 bg-black text-white text-center rounded-sm'>
               <NavLink to='#' onClick={() => setActive(!active)}>
                Sign In
               </NavLink>
            </div>
            ) 
            }

            {active && <Signin close={() => setActive(!active)} pass = {() => setActivepass(!activepass)}/>}
            {activepass && <Emailenter pass={() => setActivepass(!activepass)}/>}

        </nav>
        
    )
}

export default Navbar;