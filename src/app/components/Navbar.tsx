import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import Dropdown from './Dropdown';


const Navbar = async () => {
    const session = await getServerSession(authOptions);
    let tabToDisplay = session && session.user?.email 
    ? [{name: 'SignOut', path: '/auth/signout'},{name: 'Dashboard', path: '/protected/dashboard'}]
    : [{name: 'SignIn', path: '/auth/signin'},{name: 'SignUp', path: '/auth/signup'}] 

    return (
        <div className='w-full px-4 py-8 bg-gray-300 flex flex-row items-center gap-4'>
           
            <Link href='/'>🏠</Link>
            <Dropdown tabs={tabToDisplay}/>
            {session && session.user?.email ? (
                    <p>
                        <b>Connecté.e avec {session.user?.email}</b>
                    </p>):(<></>)}
        </div>
    );
};

export default Navbar;