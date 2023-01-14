import React, { useState } from 'react'
// import { Navigate, Routes, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Error from '../component/Error'
import Login from '../component/Login'

// import Quotes from '../component/Quotes'
import Registration from '../component/Registration'
import yoga1 from '../images/yoga1.png'
import yoga2 from '../images/yoga2.png'
import yoga3 from '../images/yoga3.png'
import Homepage from './Homepage'


const Home = () => {

    const [user, setLoginUser] = useState({
        // name: '',
        // email: '',
        // password: ''

    });

    return (
        <div className='flex md:flex-row flex-col-reverse justify-around items-center min-h-screen py-6 '>
            <img className='absolute -z-11 w-28 top-12 opacity-20' src={yoga1} alt="" srcSet="" />
            <img className='absolute -z-11 w-28 left-6 md:bottom-12 opacity-20' src={yoga2} alt="" srcSet="" />
            <img className='absolute -z-11 w-28 bottom-6 opacity-20' src={yoga3} alt="" srcSet="" />
            {/* <Quotes /> */}
            <Routes>
                <Route exact path="/" element=
                    {user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />}
                />
                {/* <Route path="/" element={<Navigate to="/Registration" replace={true} />} /> */}
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
                <Route path="/*" element={<Error />} />
            </Routes>

        </div>
    )
}

export default Home